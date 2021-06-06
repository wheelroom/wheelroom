import inquirer from 'inquirer'
import { ArboristNode } from './arborist'
import { confirmQuestions } from './confirm-questions'

interface GetIsConfirmed {
  subCommand?: string
  buildNodes: ArboristNode[]
}

export const confirm = async ({ subCommand, buildNodes }: GetIsConfirmed) => {
  console.log(
    `This will ${subCommand || 'build, version and publish'} ${
      buildNodes.length === 1 ? 'this package' : 'these packages'
    }:`
  )
  console.log(`${buildNodes.map((node) => node.package.name).join('\n')}`)
  const answers = await inquirer.prompt(confirmQuestions)
  return answers.policy === 'y'
}
