import { Component, Components } from '@jacco-meijer/wheelroom'
import * as fse from 'fs-extra'
import * as inquirer from 'inquirer'
import { Options, TemplateSet } from '../types/options'
import { Template, Templates } from '../types/templates'
import { askQuestions } from './ask-questions'
import { getTemplates } from './get-templates'
import { getVars } from './get-vars'
import { noTrailingSlash } from './helpers'

type OverwritePolicy = 'y' | 'n' | 'a' | 'q' | undefined

interface WriteTemplate {
  fileName: string
  filePath: string
  content: string
  dryRun?: boolean
  lastOverwritePolicy?: OverwritePolicy
}

const askOverwritePolicy = async () => {
  const questions = [
    {
      choices: [
        {
          key: 'y',
          name: 'Yes',
          value: 'y',
        },
        {
          key: 'n',
          name: 'No',
          value: 'n',
        },
        {
          key: 'a',
          name: 'All, this one and all next',
          value: 'a',
        },
        {
          key: 'q',
          name: 'Quit',
          value: 'quit',
        },
      ],
      default: 'y',
      message: 'Overwrite?`:',
      name: 'policy',
      type: 'expand',
    },
  ] as any
  const answers: any = await inquirer.prompt(questions)
  return answers.policy
}

const writeTemplate = async ({
  fileName,
  filePath,
  content,
  dryRun,
  lastOverwritePolicy,
}: WriteTemplate) => {
  const writeTo = `${filePath}/${fileName}`
  const exists = await fse.pathExists(writeTo)

  let overwritePolicy = lastOverwritePolicy
  if (dryRun) {
    console.log(`About to ${exists ? 'OVERWRITE' : 'write'}: ${writeTo}`)
  } else {
    let doWrite: boolean = false
    if (exists) {
      if (overwritePolicy === 'a') {
        console.log(`OVERWRITING: ${writeTo}`)
        doWrite = true
      } else {
        console.log(`File exists: ${writeTo}`)
        overwritePolicy = await askOverwritePolicy()
        if (overwritePolicy === 'y' || overwritePolicy === 'a') {
          console.log(`OVERWRITING: ${writeTo}`)
          doWrite = true
        } else {
          console.log(`Skipping: ${writeTo}`)
        }
      }
    } else {
      console.log(`Writing: ${writeTo}`)
      doWrite = true
    }
    if (doWrite) {
      // This command also creates the path if the path does not exist
      await fse.outputFile(writeTo, content)
    }
  }
  return overwritePolicy
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
  lastOverwritePolicy?: OverwritePolicy
  path: string
  templates: Templates
}

const writeTemplates = async ({
  answers,
  component,
  componentName,
  dryRun,
  lastOverwritePolicy,
  path,
  templates,
}: WriteTemplates) => {
  let overwritePolicy: OverwritePolicy = lastOverwritePolicy
  // Process writing files sequentially, so that we can confirm each file
  for (const [, aTemplate] of Object.entries(templates)) {
    const template = aTemplate as Template
    const vars = getVars(answers, template, component, componentName)
    const content = template.template(vars)
    // No content? Skip writing the file
    if (content) {
      const [fileName, filePath] = getPath(path, template.path, vars)
      overwritePolicy = await writeTemplate({
        content,
        dryRun,
        fileName,
        filePath,
        lastOverwritePolicy: overwritePolicy,
      })
    }
  }
  return overwritePolicy
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
  let overwritePolicy: OverwritePolicy
  const writeParams = {
    answers,
    dryRun,
    path,
    templates,
  }
  if (templateSet.loopComponents) {
    // Process writing files sequentially, so that we can confirm each file
    for (const [componentName, component] of Object.entries(components)) {
      // We have a component, add it as parameter
      overwritePolicy = await writeTemplates({
        ...writeParams,
        component,
        componentName,
        lastOverwritePolicy: overwritePolicy,
      })
    }
  } else {
    await writeTemplates(writeParams)
  }
}

const confirmWrite = async () => {
  const confirm = [
    {
      default: true,
      message: `
Proceeding here will create new files and prompt you if a file gets overwritten.
Proceed?`,
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
