import { Component, Components } from '@jacco-meijer/wheelroom'
// import * as fs from 'fs'
import * as fse from 'fs-extra'
// import * as util from 'util'
import { Options, TemplateSet } from '../types/options'
import { Template, Templates } from '../types/templates'
import { askQuestions } from './ask-questions'
import { getTemplates } from './get-templates'
import { getVars } from './get-vars'
import { noTrailingSlash } from './helpers'

// const writeFile = util.promisify(fs.writeFile)

const writeTemplate = async (
  fileName: string,
  filePath: string,
  content: string
) => {
  try {
    await fse.ensureDir(filePath)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

  const writeTo = `${filePath}/${fileName}`

  console.log(`Writing to ${writeTo}...`)
  // await writeFile(writeTo, content)
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
  path: string
  templates: Templates
}

export const writeTemplates = async ({
  answers,
  component,
  componentName,
  path,
  templates,
}: WriteTemplates) => {
  await Promise.all(
    Object.entries(templates).map(
      async ([templateName, template]: [string, Template]) => {
        const vars = getVars(answers, template, component, componentName)
        console.log(
          'Writing template for component',
          vars.componentName.camelCase,
          templateName
        )
        const content = 'test' // template.template(vars)
        const [fileName, filePath] = getPath(path, template.path, vars)

        await writeTemplate(fileName, filePath, content)
      }
    )
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
  const answers = await askQuestions(pluginOptions, templateSet)

  if (templateSet.loopComponents) {
    await Promise.all(
      Object.entries(components).map(
        async ([componentName, component]: [string, Component]) => {
          await writeTemplates({
            answers,
            component,
            componentName,
            path,
            templates,
          })
        }
      )
    )
  } else {
    await writeTemplates({ answers, path, templates })
  }
}
