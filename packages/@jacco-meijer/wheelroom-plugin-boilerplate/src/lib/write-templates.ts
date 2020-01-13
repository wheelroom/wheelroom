import {
  createParser,
  replaceFunctions,
  WheelroomComponent,
} from '@jacco-meijer/wheelroom'
import {
  getCases,
  replaceAll,
  WriteFileList,
  writeFiles,
  WriteFilesContext,
} from '@jacco-meijer/wheelroom'
import inquirer from 'inquirer'
import { TemplateDefinition } from '../types/template-sets'
import {
  GetFileListContext,
  WriteTemplatesContext,
} from '../types/wite-templates-context'
import { replaceFunctions as localReplaceFunction } from './parser/replace-functions'

const singleVariationName = 'single'

export const writeTemplates = async (context: WriteTemplatesContext) => {
  const fileList: WriteFileList = getFileList(context)

  const writeFilesContext: WriteFilesContext = {
    dryRun: true,
    fileList,
    yes: context.yes,
  }
  // console.log('WRITE FILES', JSON.stringify(writeFilesContext, null, 2))

  // Do a dry run first
  await writeFiles(writeFilesContext)
  // Next, ask for confirmation and do the actual write
  if (await confirmWrite(context.yes)) {
    await writeFiles({ ...writeFilesContext, dryRun: false })
  }
}

// Loop templates and get file list for each
const getFileList = (context: GetFileListContext): WriteFileList => {
  const fileList: WriteFileList = []

  Object.entries(context.templateSet).forEach(
    ([templateName, templateDefinition]: [string, TemplateDefinition]) => {
      context.templateDefinition = templateDefinition
      fileList.push(...getFileListForTemplate(context))
    }
  )
  return fileList
}

// Loop components of a single tempalte, parse and return file list
const getFileListForTemplate = (context: GetFileListContext): WriteFileList => {
  const fileList: WriteFileList = []
  const parser = createParser({})
  parser.addReplaceFunctions([...replaceFunctions, ...localReplaceFunction])

  Object.entries(context.wheelroomComponents)
    .filter(([componentName, component]: [string, WheelroomComponent]) => {
      if (!context.templateDefinition!.filterComponentSetting) {
        // Pass all if no filter is present
        return true
      }
      return component.settings[
        context.templateDefinition!.filterComponentSetting
      ]
    })
    .forEach(([componentName, component]: [string, WheelroomComponent]) => {
      const unparsed = context.templateDefinition!.template
      parser.updateVars({
        component,
        componentName,
        components: context.wheelroomComponents,
        singleVariationName,
      })
      // We provide a string, so we can expect a string back
      const relPath = parser.parse(context.templateDefinition!.path)
      // If the path does not have a variable, skip. Because we otherwise will
      // overwrite the same file.
      if (
        relPath === context.templateDefinition!.path &&
        fileList.length >= 1
      ) {
        return
      }

      // If we detect %variation% in the relPath, create a file for each variation
      if (relPath.includes('%variation%')) {
        let items: string[]
        if (
          'variation' in component.fields &&
          'items' in component.fields.variation
        ) {
          items = component.fields.variation.items!
        } else {
          items = [singleVariationName]
        }
        items.forEach((item: string) => {
          // Parse with current variation
          parser.updateVars({ currentVariation: item })
          const content = parser.parse(unparsed)

          // Finish parsing and write this variation to file
          fileList.push({
            basePath: context.basePath,
            content,
            relPath: replaceAll(
              relPath,
              '%variation%',
              getCases(item).kebabCase
            ),
          })
        })
      } else {
        // No variations, finish parsing and write file
        const content = parser.parse(unparsed)
        fileList.push({
          basePath: context.basePath,
          content,
          relPath,
        })
      }
    })
  return fileList
}

const confirmWrite = async (yes: boolean | undefined) => {
  if (yes) {
    return true
  }
  const confirm = [
    {
      default: true,
      message: `
  Proceeding will create new files and prompt for each file that is overwritten.
  Proceed?`,
      name: 'confirmWrite',
      type: 'confirm',
    },
  ] as any
  const confirmAnswer: any = await inquirer.prompt(confirm)
  return confirmAnswer.confirmWrite
}
