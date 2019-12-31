import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { Context } from '../types/context'
import { generateContentfulComponents } from './generate-contentful-components'

export const initializeContext = (argv: any) => {
  const pluginOptions =
    argv.options['@jacco-meijer/wheelroom-plugin-contentful']
  const wheelroomComponents = getFilteredComponents(argv)

  const context = {
    commandLineOptions: {
      yes: argv.yes,
    },
    contentfulApi: {
      fields: {},
    },
    contentfulComponents: generateContentfulComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions
    ),
    pluginOptions,
    wheelroomComponents,
  } as Context
  return context
}
