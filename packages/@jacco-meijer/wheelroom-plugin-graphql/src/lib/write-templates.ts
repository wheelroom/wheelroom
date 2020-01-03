import { parser } from '@jacco-meijer/wheelroom'
import {
  WriteFileList,
  writeFiles,
  WriteFilesContext,
} from '@jacco-meijer/wheelroom'
import inquirer from 'inquirer'
import {
  GetFileListContext,
  WriteTemplatesContext,
} from '../types/wite-templates-context'
import { templateParser } from './template-parser'

const singleVariationName = 'single'

export const writeTemplates = async (context: WriteTemplatesContext) => {
  const fileList: WriteFileList = getFileList(context)

  const writeFilesContext: WriteFilesContext = {
    dryRun: true,
    fileList,
    yes: context.yes,
  }
  console.log('OUTPUT-HERE', JSON.stringify(writeFilesContext, null, 2))

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
  for (const [componentName, component] of Object.entries(
    context.wheelroomComponents
  )) {
    context.componentName = componentName
    context.wheelroomComponent = component
    fileList.push(...getFileListForComponent(context))
  }
  return fileList
}

// Loop templates of a single component, parse them and return file list
const getFileListForComponent = (
  context: GetFileListContext
): WriteFileList => {
  const fileList: WriteFileList = []
  for (const [, templateDefinition] of Object.entries(context.templateSet)) {
    const component = context.wheelroomComponent!
    const componentName = context.componentName!
    let unparsed = templateDefinition.template

    const relPath = parser({
      componentName: context.componentName!,
      unparsed: templateDefinition.path,
    })

    unparsed = parser({
      componentName,
      unparsed,
    })

    const templateParserContext = {
      component,
      componentName,
      singleVariationName,
      unparsed,
    }
    const content = templateParser(templateParserContext)
    fileList.push({
      basePath: context.basePath,
      content,
      relPath,
    })
  }
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
