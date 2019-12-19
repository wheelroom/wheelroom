import { getFilteredComponents } from '@jacco-meijer/wheelroom'
import { Context } from '../types/context.js'

export const initializeContext = (argv: any) => {
  const context = {
    components: getFilteredComponents(argv),
    contentfulApi: {
      fields: {},
    },
    pluginOptions: argv.options['@jacco-meijer/wheelroom-plugin-contentful'],
  } as Context
  return context
}
