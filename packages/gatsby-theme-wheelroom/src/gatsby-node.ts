import {
  buildNamedPaths,
  createPages,
  createSubPages,
  GatsbyNodeContext,
  getComponentConfigs,
  getWheelroomConfig,
  runQueries,
} from '@jacco-meijer/wheelroom'

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  const wheelroomConfig = await getWheelroomConfig()
  const componentConfigs = await getComponentConfigs({ wheelroomConfig })

  const context = {
    componentConfigs,
    createPage,
    graphql,
    namedPaths: {},
    options,
    queries: {
      global: {},
      page: {},
      subPage: {},
    },
    wheelroomConfig,
  } as GatsbyNodeContext

  await runQueries(context)
  buildNamedPaths(context)
  createPages(context)
  createSubPages(context)
}
