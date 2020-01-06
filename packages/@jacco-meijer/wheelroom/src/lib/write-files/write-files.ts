import fse from 'fs-extra'
import inquirer from 'inquirer'
import {
  WriteFileListItem,
  WriteFilesContext,
} from '../../types/write-files-context'
import { noTrailingSlash } from '../parser/case-helpers'
import { writeFileQuestions } from './write-files-questions'

type OverwritePolicy = 'y' | 'n' | 'a' | 'q' | undefined

export const writeFiles = async (context: WriteFilesContext) => {
  let lastOverwritePolicy: OverwritePolicy
  await Promise.all(
    context.fileList.map(async (fileDetails: WriteFileListItem) => {
      lastOverwritePolicy = await writeFile({
        basePath: fileDetails.basePath,
        content: fileDetails.content,
        dryRun: context.dryRun,
        lastOverwritePolicy,
        relPath: fileDetails.relPath,
        yes: context.yes,
      })
    })
  )
}

interface WriteFileContext {
  basePath: string
  content: string
  dryRun: boolean | undefined
  lastOverwritePolicy: OverwritePolicy
  relPath: string
  yes: boolean | undefined
}

const writeFile = async (context: WriteFileContext) => {
  const [fileName, filePath] = getPath(context.basePath, context.relPath)

  const writeTo = `${filePath}/${fileName}`
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
  const answers: any = await inquirer.prompt(writeFileQuestions)
  return answers.policy
}

const getPath = (basePath: string, relPath: string) => {
  const fullPath = noTrailingSlash(basePath) + `/${relPath}`
  const fileName = fullPath.replace(/^.*[\\\/]/, '')
  const filePath = fullPath.substring(0, fullPath.lastIndexOf('/'))
  return [fileName, filePath]
}
