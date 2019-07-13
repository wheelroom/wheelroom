import { Context } from '../types/context'

export const initializeContext = (argv: any) => {
  const context = {
    components: argv.components,
    contentfulApi: {},
    pluginOptions: argv.options['@jacco-meijer/wheelroom-plugin-contentful'],
  } as Context
  return context
}
