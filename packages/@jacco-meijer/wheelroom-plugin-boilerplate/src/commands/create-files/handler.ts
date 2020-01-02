import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { writeFiles } from '../../lib/write-files'
import { TemplateSets } from '../../types/template-sets'

export const handler = async (argv: any) => {
  const templateSets = argv.options[
    '@jacco-meijer/wheelroom-plugin-boilerplate'
  ].templateSets as TemplateSets

  const templateSet = templateSets[argv.templateSet]

  if (!templateSet) {
    const setNames = Object.keys(templateSets).join('/')
    console.log(`Could not find templateSet ${argv.templateSet}`)
    console.log(`Avaialble templateSets are: ${setNames}`)
    return
  }

  await writeFiles(
    argv.path,
    templateSet,
    getFilteredComponents(argv),
    argv.yes
  )
}
