import {
  noTrailingSlash,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { parser } from '@jacco-meijer/wheelroom'
import * as fse from 'fs-extra'
import * as inquirer from 'inquirer'
import { TemplateSet } from '../types/template-sets'
import { templateParser } from './template-parser'

const askOverwritePolicy = async (yes: boolean) => {
  if (yes) {
    return 'a'
  }
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
          value: 'q',
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

type OverwritePolicy = 'y' | 'n' | 'a' | 'q' | undefined

interface WriteTemplate {
  fileName: string
  filePath: string
  content: string
  dryRun?: boolean
  lastOverwritePolicy?: OverwritePolicy
  yes: boolean
}

const writeTemplate = async ({
  content,
  dryRun,
  fileName,
  filePath,
  lastOverwritePolicy,
  yes,
}: WriteTemplate) => {
  const writeTo = `${filePath}/${fileName}`
  const exists = await fse.pathExists(writeTo)

  let overwritePolicy = lastOverwritePolicy
  if (dryRun) {
    console.log(`About to ${exists ? 'OVERWRITE' : 'write'}: ${writeTo}`)
  } else {
    let doWrite: boolean = false
    if (overwritePolicy === 'q') {
      console.log(`Skipping: ${writeTo}`)
      return overwritePolicy
    }
    if (exists) {
      if (overwritePolicy === 'a') {
        console.log(`OVERWRITING: ${writeTo}`)
        doWrite = true
      } else {
        console.log(`File exists: ${writeTo}`)
        overwritePolicy = await askOverwritePolicy(yes)
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

const getPath = (
  basePath: string,
  templatePath: string,
  componentName: string
) => {
  const relPath = parser({ unparsed: templatePath, componentName })

  const fullPath = noTrailingSlash(basePath) + `/${relPath}`
  const fileName = fullPath.replace(/^.*[\\\/]/, '')
  const filePath = fullPath.substring(0, fullPath.lastIndexOf('/'))
  return [fileName, filePath]
}

interface LoopTemplates {
  basePath: string
  component: WheelroomComponent
  componentName: string
  dryRun?: boolean
  lastOverwritePolicy?: OverwritePolicy
  templateSet: TemplateSet
  yes: boolean
}

const loopTtemplates = async ({
  basePath,
  component,
  componentName,
  dryRun,
  lastOverwritePolicy,
  templateSet,
  yes,
}: LoopTemplates) => {
  let overwritePolicy: OverwritePolicy = lastOverwritePolicy
  // Process writing files sequentially, so that we can confirm each file
  for (const [, templateDefinition] of Object.entries(templateSet)) {
    const wheelroomParsed = parser({
      componentName,
      unparsed: templateDefinition.template,
    })
    const content = templateParser({
      component,
      componentName,
      unparsed: wheelroomParsed,
    })

    const [fileName, filePath] = getPath(
      basePath,
      templateDefinition.path,
      componentName
    )
    overwritePolicy = await writeTemplate({
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

interface LoopComponents {
  basePath: string
  templateSet: TemplateSet
  components: WheelroomComponents
  dryRun: boolean
  yes: boolean
}

const loopComponents = async ({
  basePath,
  templateSet,
  components,
  dryRun,
  yes,
}: LoopComponents) => {
  let overwritePolicy: OverwritePolicy
  const writeParams = {
    basePath,
    dryRun,
    yes,
  }
  // Process writing components sequentially, so that we can confirm each component
  for (const [componentName, component] of Object.entries(components)) {
    overwritePolicy = await loopTtemplates({
      ...writeParams,
      component,
      componentName,
      lastOverwritePolicy: overwritePolicy,
      templateSet,
    })
  }
}

export const writeFiles = async (
  basePath: string,
  templateSet: TemplateSet,
  components: WheelroomComponents,
  yes: boolean
) => {
  const writeParams = { basePath, templateSet, components, yes }
  await loopComponents({ ...writeParams, dryRun: true })
  if (await confirmWrite(yes)) {
    await loopComponents({ ...writeParams, dryRun: false })
  }
}

const confirmWrite = async (yes: boolean) => {
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
