import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { argvCommand } from '../../../fixtures/argv-command'
import { argvContentSets } from '../../../fixtures/argv-content-sets'
import { getCfComponents } from '../get-cf-components'

describe('Generate contentful components should', () => {
  test('match the sample set without content', () => {
    const pluginOptions =
      argvCommand.options['@jacco-meijer/wheelroom-plugin-contentful']
    const wheelroomComponents = getFilteredComponents(argvCommand)

    const contentfulComponents = getCfComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions
    )
    expect(contentfulComponents).toMatchSnapshot()
  })

  test('match the sample set with a content set', () => {
    const pluginOptions =
      argvCommand.options['@jacco-meijer/wheelroom-plugin-contentful']
    const wheelroomComponents = getFilteredComponents(argvCommand)

    const contentfulComponents = getCfComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions,
      argvContentSets.test
    )
    expect(contentfulComponents).toMatchSnapshot()
  })
})
