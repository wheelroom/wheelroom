import { getFilteredComponents } from '@wheelroom/wheelroom'
import {
  getClient,
  getEnvironment,
  getSpace,
  getLocales,
} from '../contentful-api/init'
import { Context } from '../types/context'
import { getCfComponents } from './get-cf-components/get-cf-components'
import { getWrContentSet } from './get-wr-content-set'
import { orderByDependency } from './get-cf-content-set/order-by-dependency'
import { getCfContentSet } from './get-cf-content-set/get-cf-content-set'
import { getWrReplaceSet } from './get-wr-replace-set'
import { cfContentSetFromWrReplaceSet } from './get-cf-components/content-set-from-wr-replace-set'
import { ContentfulContentSet } from '../types/content-set'
import { PluginArguments } from '../types/plugin-arguments'

export const initializeContext = async (argv: PluginArguments) => {
  const pluginOptions = argv.options['@wheelroom/wheelroom-plugin-contentful']
  const wheelroomComponents = getFilteredComponents(argv)

  let wrContentSet
  let wrReplaceSet
  let cfContentSet: ContentfulContentSet

  if (['create-content', 'delete-content'].includes(argv._[0])) {
    // We need a Wheelroom content set. Display messages on what we do, if no
    // content set is present create a set with each model present

    wrContentSet = getWrContentSet(argv, pluginOptions)
    cfContentSet = getCfContentSet(wheelroomComponents, wrContentSet)
    // Sort content creation so that dependencies get created first
    orderByDependency(cfContentSet)
    const creationOrder = cfContentSet.map(c => c.componentId).join(' < ')
    console.log('Dependency order:', creationOrder)
  } else if (['replace-content'].includes(argv._[0])) {
    // We require a Wheelroom replace set by command line option
    wrReplaceSet = getWrReplaceSet(argv, pluginOptions)
    if (!wrReplaceSet) {
      cfContentSet = []
    } else {
      cfContentSet = cfContentSetFromWrReplaceSet(
        wrReplaceSet,
        wheelroomComponents
      )
    }
  } else {
    // We don't need a Wheelroom content set, create a set with each model
    // present
    cfContentSet = getCfContentSet(wheelroomComponents)
  }

  const context: Context = {
    commandLineOptions: {
      contentSet: argv.contentSet,
      locale: argv.locale,
      yes: argv.yes,
    },
    contentfulApi: {
      fields: {},
    },
    contentfulComponents: getCfComponents(
      wheelroomComponents,
      pluginOptions.fieldDefinitions,
      cfContentSet
    ),
    pluginOptions,
    wheelroomComponents,
  }

  // Initialize the Contentful client
  await getClient(context)
  await getSpace(context)
  await getEnvironment(context)
  await getLocales(context)

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
