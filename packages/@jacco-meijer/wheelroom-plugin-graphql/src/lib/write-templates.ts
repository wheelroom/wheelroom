import { parser, WheelroomComponent } from '@jacco-meijer/wheelroom'
import {
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
import { templateParser } from './template-parser/template-parser'

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

// Loop components and get file list for each
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

// Loop templates of a single component, parse them and return file list
const getFileListForTemplate = (context: GetFileListContext): WriteFileList => {
  const fileList: WriteFileList = []
  Object.entries(context.wheelroomComponents)
    .filter(([componentName, component]: [string, WheelroomComponent]) => {
      if (!context.templateDefinition!.filterGraphQLSetting) {
        // Pass all if no filter is present
        return true
      }
      return component.graphQL[context.templateDefinition!.filterGraphQLSetting]
    })
    .forEach(([componentName, component]: [string, WheelroomComponent]) => {
      let unparsed = context.templateDefinition!.template
      // We provide a string, so we can expect a string back
      const relPath = parser(context.templateDefinition!.path, {
        componentName,
      })
      // If the path does not have a variable, skip. Because we otherwise will
      // overwrite the same file.
      if (
        relPath === context.templateDefinition!.path &&
        fileList.length >= 1
      ) {
        return
      }
      unparsed = parser(unparsed, {
        component,
        componentName,
      })
      const content = templateParser({
        component,
        componentName,
        components: context.wheelroomComponents,
        unparsed,
      })
      fileList.push({
        basePath: context.basePath,
        content,
        relPath,
      })
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
