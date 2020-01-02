import * as fse from 'fs-extra'
import * as inquirer from 'inquirer'
import { WriteFileContext } from '../types/write-file-context'

export const writeFile = async (context: WriteFileContext) => {
  const writeTo = `${context.filePath}/${context.fileName}`
  const exists = await fse.pathExists(writeTo)

  let overwritePolicy = context.lastOverwritePolicy
  if (context.dryRun) {
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
        overwritePolicy = await askOverwritePolicy(context.yes)
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
      await fse.outputFile(writeTo, context.content)
    }
  }
  return overwritePolicy
}

const askOverwritePolicy = async (yes: boolean | undefined) => {
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
