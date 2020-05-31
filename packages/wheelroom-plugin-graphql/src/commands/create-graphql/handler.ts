import { getFilteredComponents } from '@wheelroom/wheelroom'
import { writeTemplates } from '../../lib/write-templates'
import { TemplateSets } from '../../types/template-sets'
import { PluginArguments } from '../../types/plugin-arguments'

export const handler = async (argv: PluginArguments) => {
  const templateSets = argv.options['@wheelroom/wheelroom-plugin-graphql']
    .templateSets as TemplateSets

  const templateSet = templateSets[argv.templateSet]

  if (!templateSet) {
    const setNames = Object.keys(templateSets).join('/')
    console.log(`Could not find templateSet ${argv.templateSet}`)
    console.log(`Avaialble templateSets are: ${setNames}`)
    return
  }

  await writeTemplates({
    basePath: argv.path,
    templateSet,
    wheelroomComponents: getFilteredComponents(argv),
    yes: argv.yes,
  })
}
