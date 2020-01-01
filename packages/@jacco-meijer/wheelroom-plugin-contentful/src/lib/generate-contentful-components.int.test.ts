import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { commandArgv } from '../fixtures/command-argv'
import { mergedFields } from '../fixtures/merged-fields'
import { generateContentfulComponents } from './generate-contentful-components'

test('Generate contentful components', () => {
  const pluginOptions =
    commandArgv.options['@jacco-meijer/wheelroom-plugin-contentful']
  const wheelroomComponents = getFilteredComponents(commandArgv)

  const contentfulComponents = generateContentfulComponents(
    wheelroomComponents,
    pluginOptions.fieldDefinitions
  )
  expect(contentfulComponents).toStrictEqual(mergedFields)
})
