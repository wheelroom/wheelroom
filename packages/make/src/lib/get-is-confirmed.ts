import inquirer from 'inquirer'
import { ArboristNode } from './arborist'
import { questions } from './get-confirmation-questions'

interface GetIsConfirmed {
  subCommand?: string
  buildNodes: ArboristNode[]
}

export const getIsConfirmed = async ({
  subCommand,
  buildNodes,
}: GetIsConfirmed) => {
  console.log(
    `This will ${subCommand || 'build, version and publish'} ${
      buildNodes.length === 1 ? 'this package' : 'these packages'
    }:`
  )
  console.log(`${buildNodes.map((node) => node.package.name).join('\n')}`)
  const answers = await inquirer.prompt(questions)
  return answers.policy === 'y'
}
