import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { argvCommand } from '../fixtures/argv-command'
import { mergedFields } from '../fixtures/merged-fields'
import { generateContentfulComponents } from './generate-contentful-components'

test('Generate contentful components', () => {
  const pluginOptions =
    argvCommand.options['@jacco-meijer/wheelroom-plugin-contentful']
  const wheelroomComponents = getFilteredComponents(argvCommand)

  const contentfulComponents = generateContentfulComponents(
    wheelroomComponents,
    pluginOptions.fieldDefinitions
  )
  expect(contentfulComponents).toStrictEqual(mergedFields)
})
