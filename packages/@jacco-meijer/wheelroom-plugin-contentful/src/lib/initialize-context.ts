import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { getClient, getEnvironment, getSpace } from '../contentful-api/init'
import { WheelroomContentSet } from '../types/content-set'
import { Context } from '../types/context'
import { getCfComponents } from './get-cf-components/get-cf-components'

export const initializeContext = async (argv: any) => {
  const pluginOptions =
    argv.options['@jacco-meijer/wheelroom-plugin-contentful']
  const wheelroomComponents = getFilteredComponents(argv)

  let contentSet: WheelroomContentSet | undefined
  if (
    argv.contentSet &&
    pluginOptions.contentSets &&
    argv.contentSet in pluginOptions.contentSets
  ) {
    contentSet = pluginOptions.contentSets[argv.contentSet]
  }

  const context: Context = {
    commandLineOptions: {
      contentSet: argv.contentSet,
      yes: argv.yes,
    },
    contentfulApi: {
      fields: {},
    },
    contentfulComponents: getCfComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions,
      contentSet
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
