import { Component, Components } from '@jacco-meijer/wheelroom'
import * as inquirer from 'inquirer'
import { Options, TemplateSet } from '../types/options'
import { Template, Templates } from '../types/templates'
import { getTemplates } from './get-templates'

interface WriteTemplate {
  answers?: any
  component?: Component | null
  componentName?: string
  templates: Templates
}

export const writeTemplates = ({
  answers,
  component,
  componentName,
  templates,
}: WriteTemplate) => {
  Object.entries(templates).forEach(
    ([templateName, template]: [string, Template]) => {
      console.log('Writing template for component', componentName, templateName)
    }
  )
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
  let answers: any

  if (pluginOptions.questionSets && templateSet.questions) {
    if (templateSet.questions in pluginOptions.questionSets) {
      answers = await inquirer.prompt(pluginOptions.questionSets[
        templateSet.questions
      ] as any)
    } else {
      console.log(`Could not find ${templateSet.questions} in questionSets`)
      console.log(
        `Available questionSets: ${Object.keys(pluginOptions.questionSets)}`
      )
    }
  }

  if (templateSet.loopComponents) {
    Object.entries(components).forEach(
      ([componentName, component]: [string, Component]) => {
        writeTemplates({
          answers,
          component,
          componentName,
          templates,
        })
      }
    )
  } else {
    writeTemplates({ templates })
  }
}
