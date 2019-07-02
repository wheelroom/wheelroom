import {
  getComponentConfigs,
  getWheelroomConfig,
} from '@jacco-meijer/wheelroom'
import { ComponentConfig } from '@jacco-meijer/wheelroom'
import {
  ContentfulObject,
  GatsbyNodeContext,
  GetPageContext,
  PageContext,
} from './types/gatsby-node-context'

const defaultLocale = 'en-US'

const runQueries = async (context: GatsbyNodeContext) => {
  console.log(`Running queries`)
  await Promise.all(
    context.componentConfigs.map(async (componentConfig: ComponentConfig) => {
      if (
        ['global', 'subPage', 'page'].includes(
          componentConfig.model.wheelroomType
        )
      ) {
        console.log(
          `Running query ${componentConfig.model.type} for type ${componentConfig.model.wheelroomType}`
        )
        const result = await context.graphql(componentConfig.query)
        if (!result.data) {
          throw new Error(
            `Could not find any ${componentConfig.model.type} of type ${componentConfig.model.wheelroomType} at Contentful, please check the model query
            `
          )
        }
        context.queries[componentConfig.model.wheelroomType][
          componentConfig.model.type
        ] = result.data[componentConfig.model.type].edges
      }
    })
  )
}

const getLocale = (page: any) => {
  return page.node_locale
}

const getDefaultLocale = (context: GatsbyNodeContext): string => {
  return context.wheelroomConfig.defaultLocale || defaultLocale
}

const buildNamedPaths = (context: GatsbyNodeContext) => {
  console.log(`Building named paths`)
  context.queries.page.page.forEach((edge: any) => {
    const page = edge.node
    if (!(page.pathName in context.namedPaths)) {
      context.namedPaths[page.pathName] = { path: '' }
    }
    context.namedPaths[page.pathName].path = page.path
    const locale = getLocale(page)
    const localizedBasePath =
      locale === getDefaultLocale(context)
        ? page.path
        : '/' + locale + page.path

    // Strip trailing slashes
    context.namedPaths[page.pathName][
      locale
    ] = localizedBasePath.toLowerCase().replace(/(.)\/$/, '$1')
  })
}

const getPageContext = ({
  context,
  page,
  subPage,
  pageType,
}: GetPageContext): PageContext => {
  const pageContext = {
    locale: getLocale(page),
    namedPaths: context.namedPaths,
  } as PageContext

  // Add global ids
  // TODO: If no globals exist, skip this
  Object.entries(context.queries.global).forEach(([globalsName, globals]) => {
    globals.forEach((globalsItem: ContentfulObject) => {
      const globalsLocale = globalsItem.node.node_locale
      if (globalsLocale === getLocale(page)) {
        pageContext[globalsName + 'Id'] = globalsItem.node.id
      }
    })
  })

  // Add page id
  pageContext[pageType + 'Id'] = page.id

  // Add subPage id
  if (subPage) {
    pageContext[page.pathName + 'Id'] = subPage.node.id
  }
  return pageContext
}

const createPages = (context: GatsbyNodeContext) => {
  console.log(`Creating pages`)
  Object.entries(context.queries.page).forEach(([pageType, pageEdge]) => {
    pageEdge.forEach(edge => {
      const page = edge.node
      const locale = getLocale(page)
      const localizedBasePath = context.namedPaths[page.pathName][locale]

      const tokens = localizedBasePath.split('%')
      if (tokens.length === 3) {
        return
      }

      console.log(`Creating page: ${localizedBasePath}`)
      context.createPage({
        component: context.options.pageTemplate,
        context: getPageContext({ context, page, pageType }),
        path: localizedBasePath,
      })
    })
  })
}

const createSubPages = (context: GatsbyNodeContext) => {
  console.log(`Creating sub pages`)
  Object.entries(context.queries.page).forEach(([pageType, pageEdge]) => {
    pageEdge.forEach(edge => {
      const page = edge.node
      const pageLocale = getLocale(page)
      const localizedBasePath = context.namedPaths[page.pathName][pageLocale]
      // Build sub pages if we find a fieldname like %slug%
      const tokens = localizedBasePath.split('%')
      if (tokens.length !== 3) {
        return
      }
      const templateVar = tokens[1]
      tokens.splice(1, 1)

      const pathsDone: string[] = []
      context.queries.subPage[page.pathName].forEach(subPage => {
        if (!subPage.node.node_locale) {
          console.log(
            `Using default locale for subPage ${subPage.node[templateVar]}`
          )
        }
        const subPageLocale =
          subPage.node.node_locale || getDefaultLocale(context)

        if (subPageLocale !== pageLocale) {
          return
        }

        const subPageTokens = tokens.slice()
        subPageTokens.push(subPage.node[templateVar])
        const pagePath = subPageTokens.join('')
        if (pathsDone.includes(pagePath)) {
          return
        }

        console.log(`Creating sub page: ${pagePath}`)
        context.createPage({
          component: context.options.pageTemplate,
          context: getPageContext({ context, page, subPage, pageType }),
          path: pagePath,
        })
        pathsDone.push(pagePath)
      })
    })
  })
}

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  const wheelroomConfig = await getWheelroomConfig()

  const context = {
    componentConfigs: [],
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

  context.componentConfigs = await getComponentConfigs('')

  await runQueries(context)

  buildNamedPaths(context)
  createPages(context)
  createSubPages(context)
}
