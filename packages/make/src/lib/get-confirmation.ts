import inquirer from 'inquirer'
import { questions } from './get-confirmation-questions'

interface GetConfirmation {
  subCommand?: string
  packageNames: string[]
}

export const getConfirmation = async ({
  subCommand,
  packageNames,
}: GetConfirmation) => {
  console.log(
    `This will ${subCommand || 'build, version and publish'} these packages`
  )
  console.log(`${packageNames.join('\n')}`)
  const answers = await inquirer.prompt(questions)
  if (answers.policy !== 'y') {
    process.exit(0)
  }
}
