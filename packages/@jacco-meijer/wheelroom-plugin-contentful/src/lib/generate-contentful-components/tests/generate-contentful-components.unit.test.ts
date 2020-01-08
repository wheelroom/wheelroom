import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { argvCommand } from '../../../fixtures/argv-command'
import { generateContentfulComponents } from '../generate-contentful-components'
import { output } from './output'

describe('Generate contentful components should', () => {
  test('match the sample sets', () => {
    const pluginOptions =
      argvCommand.options['@jacco-meijer/wheelroom-plugin-contentful']
    const wheelroomComponents = getFilteredComponents(argvCommand)

    const contentfulComponents = generateContentfulComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions
    )
    // console.log('OUTPUT', JSON.stringify(contentfulComponents, null, 2))
    expect(contentfulComponents).toStrictEqual(output)
  })
})
