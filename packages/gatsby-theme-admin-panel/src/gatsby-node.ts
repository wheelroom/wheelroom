
interface PluginOptions {
  path: string
  template: any
}

exports.createPages = async (
  { actions }: any,
  pluginOptions: PluginOptions
) => {
  const { createPage } = actions

  createPage({
    path: pluginOptions.path || '/admin',
    component: pluginOptions.template,
    context: {},
  })
}
