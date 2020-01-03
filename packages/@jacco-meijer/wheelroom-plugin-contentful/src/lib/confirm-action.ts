import inquirer from 'inquirer'
import { Context } from '../types/context'

export const confirmAction = async (question: string, context: Context) => {
  if (context.commandLineOptions.yes) {
    return true
  }
  const componentList = Object.keys(context.components)
    .map((componentName: string) => componentName)
    .join(', ')

  const message = `${question}: ${componentList}?`
  const confirm = [
    {
      default: true,
      message,
      name: 'confirmWrite',
      type: 'confirm',
    },
  ] as any
  const confirmAnswer: any = await inquirer.prompt(confirm)
  return confirmAnswer.confirmWrite
}
