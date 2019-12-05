import * as inquirer from 'inquirer'
import { Options, TemplateSet } from '../types/options'

export const askQuestions = async (
  pluginOptions: Options,
  templateSet: TemplateSet
) => {
  let answers
  if (pluginOptions.questionSets && templateSet.questions) {
    if (templateSet.questions in pluginOptions.questionSets) {
      console.log(``)
      answers = await inquirer.prompt(
        pluginOptions.questionSets[templateSet.questions] as any
      )
      console.log(`
Thanks, now setting up template set ${templateSet.name}
`)
    } else {
      console.log(
        `Skipping questions. Could not find ${templateSet.questions} in questionSets`
      )
      console.log(
        `Please use one of the available questionSets: ${Object.keys(
          pluginOptions.questionSets
        )}`
      )
    }
  }
  return answers
}
