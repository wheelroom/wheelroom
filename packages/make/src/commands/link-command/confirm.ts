import inquirer from 'inquirer'
import { ArboristNode } from '../../lib/arborist'
import { confirmQuestions } from '../../lib/confirm-questions'
import { linkNodes } from './link-nodes'

interface GetIsConfirmed {
  fsChildrenArray: ArboristNode[]
}

export const confirm = async ({ fsChildrenArray }: GetIsConfirmed) => {
  console.log(
    `This will link ${
      fsChildrenArray.length === 1 ? 'this package' : 'these packages'
    }:`
  )
  linkNodes({ fsChildrenArray, dryRun: true })
  const answers = await inquirer.prompt(confirmQuestions)
  return answers.policy === 'y'
}
