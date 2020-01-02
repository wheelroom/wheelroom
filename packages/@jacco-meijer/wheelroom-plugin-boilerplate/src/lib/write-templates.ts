import { noTrailingSlash } from '@jacco-meijer/wheelroom'
import { parser } from '@jacco-meijer/wheelroom'
import * as inquirer from 'inquirer'
import { WriteTemplatesContext } from '../types/wite-templates-context'
import { templateParser } from './template-parser'
import { writeFile } from './write-file'

export const writeTemplates = async (context: WriteTemplatesContext) => {
  await loopComponents({ ...context, dryRun: true })
  if (await confirmWrite(context.yes)) {
    await loopComponents({ ...context, dryRun: false })
  }
}

const loopComponents = async (context: WriteTemplatesContext) => {
  // Process writing components sequentially, so that we can confirm each component
  for (const [componentName, component] of Object.entries(
    context.wheelroomComponents
  )) {
    context.componentName = componentName
    context.wheelroomComponent = component
    context.lastOverwritePolicy = await loopTemplates(context)
  }
}

const loopTemplates = async (context: WriteTemplatesContext) => {
  let overwritePolicy = context.lastOverwritePolicy
  // Process writing files sequentially, so that we can confirm each file
  for (const [, templateDefinition] of Object.entries(context.templateSet)) {
    const component = context.wheelroomComponent!
    const componentName = context.componentName!
    const unparsed = templateDefinition.template

    const wheelroomParsed = parser({
      componentName,
      unparsed,
    })
    const content = templateParser({
      component,
      componentName,
      unparsed: wheelroomParsed,
    })
    const [fileName, filePath] = getPath({
      ...context,
      templatePath: templateDefinition.path,
    })
    const dryRun = context.dryRun
    const yes = context.yes
    overwritePolicy = await writeFile({
      content,
      dryRun,
      fileName,
      filePath,
      lastOverwritePolicy: overwritePolicy,
      yes,
    })
  }
  return overwritePolicy
}

const getPath = (context: WriteTemplatesContext) => {
  const relPath = parser({
    componentName: context.componentName!,
    unparsed: context.templatePath!,
  })

  const fullPath = noTrailingSlash(context.basePath) + `/${relPath}`
  const fileName = fullPath.replace(/^.*[\\\/]/, '')
  const filePath = fullPath.substring(0, fullPath.lastIndexOf('/'))
  return [fileName, filePath]
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
