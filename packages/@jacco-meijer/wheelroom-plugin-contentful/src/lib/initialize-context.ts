import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { getClient, getEnvironment, getSpace } from '../contentful-api/init'
import { Context } from '../types/context'
import { generateContentfulComponents } from './generate-contentful-components/generate-contentful-components'

export const initializeContext = async (argv: any) => {
  const pluginOptions =
    argv.options['@jacco-meijer/wheelroom-plugin-contentful']
  const wheelroomComponents = getFilteredComponents(argv)

  const context: Context = {
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
  }

  // Initialize the Contentful client
  await getClient(context)
  await getSpace(context)
  await getEnvironment(context)

  return context
}

/**
 * Clean up context so that a new model can be processed
 */
export const refreshContext = (context: Context) => {
  delete context.contentfulApi.asset
  delete context.contentfulApi.contentType
  delete context.contentfulApi.editorInterface
  delete context.contentfulApi.entry
  delete context.contentfulApi.upload
  context.contentfulApi.fields = {}
}
