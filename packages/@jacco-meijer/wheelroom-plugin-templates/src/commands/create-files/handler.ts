import {
  getAvailableTemplateSets,
  getTemplateSet,
} from '../../lib/get-template-sets'
import { getTemplates } from '../../lib/get-templates'
import { Options } from '../../types/options'

export const handler = async (argv: any) => {
  const pluginOptions = argv.options[
    '@jacco-meijer/wheelroom-plugin-templates'
  ] as Options

  const templateSet = getTemplateSet(
    argv.templateSet,
    pluginOptions.templateSets
  )
  if (!templateSet) {
    const templateSets = getAvailableTemplateSets(pluginOptions.templateSets)
    console.log(`Could not find templateSet ${argv.templateSet}`)
    console.log(`Avaialble templateSets are: ${templateSets}`)
    return
  }
  const templates = await getTemplates(
    templateSet.templates,
    pluginOptions.defaultTemplateResolve
  )
  // console.log('Components:', argv.components)
  console.log('templates:', templates)
  // console.log('path:', argv.path)
}
