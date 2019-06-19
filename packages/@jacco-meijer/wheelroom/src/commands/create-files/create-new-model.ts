import * as camelCase from 'camelcase'
import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as inquirer from 'inquirer'
import * as util from 'util'
import { camelToDash, noTrailingSlash } from './helpers'
import { questions } from './questions'

const fileExtension = '.ts'
const writeFile = util.promisify(fs.writeFile)

export const createNewModel = async (path: string) => {
  const answers = await inquirer.prompt(questions)
  const componentName = camelCase(answers.componentName)
  const componentFolderName = camelToDash(componentName)
  const componentPath = noTrailingSlash(path) + `/${componentFolderName}`
  console.log(`Thanks, setting up ${componentName} component`)

  try {
    await fse.ensureDir(componentPath)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

  const fileName = 'test-file' + fileExtension
  const writeTo = componentPath + '/' + fileName
  await writeFile(writeTo, 'Hallo')

  // component-template.ts
  // graphql-template.ts
  // model-template.ts
  // readme-template.ts
  // variations-template.ts


  console.log(`Done setting up ${componentName} component`)
}
