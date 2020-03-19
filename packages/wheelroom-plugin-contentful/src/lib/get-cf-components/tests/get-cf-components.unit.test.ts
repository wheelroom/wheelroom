import { getFilteredComponents } from '@wheelroom/wheelroom'
import { argvCommand } from '../../../fixtures/argv-command'
import { argvContentSets } from '../../../fixtures/argv-content-sets'
import { getCfComponents } from '../get-cf-components'
import { getCfContentSet } from '../../get-cf-content-set/get-cf-content-set'
import { orderByDependency } from '../../get-cf-content-set/order-by-dependency'

describe('Generate contentful components should', () => {
  test('match the sample set without content', () => {
    const pluginOptions =
      argvCommand.options['@wheelroom/wheelroom-plugin-contentful']
    const wheelroomComponents = getFilteredComponents(argvCommand)

    const cfContentSet = getCfContentSet(wheelroomComponents)
    orderByDependency(cfContentSet)
    const contentfulComponents = getCfComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions,
      cfContentSet
    )
    expect(contentfulComponents).toMatchSnapshot()
  })

  test('match the sample set with a content set', () => {
    const pluginOptions =
      argvCommand.options['@wheelroom/wheelroom-plugin-contentful']
    const wheelroomComponents = getFilteredComponents(argvCommand)

    const cfContentSet = getCfContentSet(
      wheelroomComponents,
      argvContentSets.test
    )
    orderByDependency(cfContentSet)
    const contentfulComponents = getCfComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions,
      cfContentSet
    )
    expect(contentfulComponents).toMatchSnapshot()
  })
})
