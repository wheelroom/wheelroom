import { Component, Components } from '@jacco-meijer/wheelroom'
import * as fse from 'fs-extra'
import * as inquirer from 'inquirer'
import { Options, TemplateSet } from '../types/options'
import { Template, Templates } from '../types/templates'
import { askQuestions } from './ask-questions'
import { getTemplates } from './get-templates'
import { getVars } from './get-vars'
import { noTrailingSlash } from './helpers'

interface WriteTemplate {
  fileName: string
  filePath: string
  content: string
  dryRun?: boolean
}

const writeTemplate = async ({
  fileName,
  filePath,
  content,
  dryRun,
}: WriteTemplate) => {
  const writeTo = `${filePath}/${fileName}`
  const exists = await fse.pathExists(writeTo)

  if (dryRun) {
    console.log(`About to ${exists ? 'OVERWRITE' : 'write'}: ${writeTo}`)
  } else {
    console.log(`${exists ? 'OVERWRITING' : 'Writing'}: ${writeTo}`)
    // This command also creates the path if the path does not exist
    await fse.outputFile(writeTo, content)
  }
}

const getPath = (basePath: string, templatePath: string, vars: any) => {
  const relPath = templatePath.replace(
    new RegExp('%component%', 'g'),
    vars.componentName.dashCase
  )
  const fullPath = noTrailingSlash(basePath) + `/${relPath}`
  const fileName = fullPath.replace(/^.*[\\\/]/, '')
  const filePath = fullPath.substring(0, fullPath.lastIndexOf('/'))
  return [fileName, filePath]
}

interface WriteTemplates {
  answers?: any
  component?: Component
  componentName?: string
  dryRun?: boolean
  path: string
  templates: Templates
}

const writeTemplates = async ({
  answers,
  component,
  componentName,
  dryRun,
  path,
  templates,
}: WriteTemplates) => {
  await Promise.all(
    Object.entries(templates).map(
      async ([templateName, template]: [string, Template]) => {
        const vars = getVars(answers, template, component, componentName)
        const content = template.template(vars)
        // Not content? Skip writing the file
        if (content) {
          const [fileName, filePath] = getPath(path, template.path, vars)
          await writeTemplate({ fileName, filePath, content, dryRun })
        }
      }
    )
  )
}

interface Write {
  path: string
  templateSet: TemplateSet
  components: Components
  answers: any
  templates: Templates
  dryRun: boolean
}

const write = async ({
  path,
  templateSet,
  components,
  answers,
  templates,
  dryRun,
}: Write) => {
  const writeParams = { answers, dryRun, path, templates }
  if (templateSet.loopComponents) {
    await Promise.all(
      Object.entries(components).map(
        async ([componentName, component]: [string, Component]) => {
          // We have a component, add it as parameter
          await writeTemplates({ ...writeParams, component, componentName })
        }
      )
    )
  } else {
    await writeTemplates(writeParams)
  }
}

const confirmWrite = async () => {
  const confirm = [
    {
      default: true,
      message: 'Proceed?',
      name: 'confirmWrite',
      type: 'confirm',
    },
  ] as any
  const confirmAnswer: any = await inquirer.prompt(confirm)
  return confirmAnswer.confirmWrite
}

export const writeFiles = async (
  path: string,
  templateSet: TemplateSet,
  pluginOptions: Options,
  components: Components
) => {
  const templates = await getTemplates(
    templateSet.templates,
    pluginOptions.defaultTemplateResolve
  )
  const answers = await askQuestions(pluginOptions, templateSet)

  const writeParams = { path, templateSet, components, answers, templates }
  await write({ ...writeParams, dryRun: true })
  if (await confirmWrite()) {
    await write({ ...writeParams, dryRun: false })
  }
}
