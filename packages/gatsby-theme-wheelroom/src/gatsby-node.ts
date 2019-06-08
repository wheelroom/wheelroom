import { getConfigsFromOptions } from './lib/config/config'
import { ComponentConfig } from './lib/types/components-map'
import {
  ContentfulObject,
  GatsbyNodeContext,
  GetPageContext,
  PageContext,
} from './lib/types/gatsby-node-context'

const runQueries = async (context: GatsbyNodeContext) => {
  await Promise.all(
    context.componentConfigs.map(async (componentConfig: ComponentConfig) => {
      if (['global', 'subPage', 'page'].includes(componentConfig.type)) {
        console.log(
          `Running query ${componentConfig.componentId} for type ${componentConfig.type}`
        )
        const result = await context.graphql(componentConfig.query)
        if (!result.data) {
          throw new Error(
            `Could not find any ${componentConfig.componentId} of type ${componentConfig.type} at Contentful, please check the model query
            `
          )
        }
        context.queries[componentConfig.type][componentConfig.componentId] =
          result.data[componentConfig.componentId].edges
      }
    })
  )
}

const getLocale = (page: any) => {
  return page.node_locale.split('-')[0].toLowerCase()
}

const getDefaultLocale = (context: GatsbyNodeContext): string => {
  return context.options.defaultLocale || 'en'
}

const buildNamedPaths = (context: GatsbyNodeContext) => {
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
    context.namedPaths[page.pathName][locale] = localizedBasePath.replace(
      /(.)\/$/,
      '$1'
    )
  })
}

const getPageContext = ({
  context,
  page,
  subPageContent,
}: GetPageContext): PageContext => {
  const pageContext = {
    locale: getLocale(page),
    namedPaths: context.namedPaths,
    pageId: page.id,
  } as PageContext

  // Add ids of Globals
  Object.entries(context.queries.global).forEach(([globalsName, globals]) => {
    globals.forEach((globalsItem: ContentfulObject) => {
      const globalsLocale = globalsItem.node.node_locale
        .split('-')[0]
        .toLowerCase()
      if (globalsLocale === getLocale(page)) {
        pageContext[globalsName + 'Id'] = globalsItem.node.id
      }
    })
  })

  // Add ids of subPage
  if (subPageContent) {
    pageContext[page.pathName + 'Id'] = subPageContent.node.id
  }
  return pageContext
}

const createPages = (context: GatsbyNodeContext) => {
  context.queries.page.page.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = context.namedPaths[page.pathName][locale]

    const tokens = localizedBasePath.split('%')
    if (tokens.length === 3) {
      return
    }

    console.log('Creating page:', localizedBasePath)
    context.createPage({
      component: context.pageTemplate,
      context: getPageContext({ context, page }),
      path: localizedBasePath,
    })
  })
}

const createSubPages = (context: GatsbyNodeContext) => {
  context.queries.page.page.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = context.namedPaths[page.pathName][locale]

    // Build sub pages if we find a fieldname like %slug%
    const tokens = localizedBasePath.split('%')
    if (tokens.length !== 3) {
      return
    }
    const templateVar = tokens[1]
    tokens.splice(1, 1)

    const localesDone: {
      [localeName: string]: boolean
    } = {}
    context.queries.subPage[page.pathName].forEach(subPageContent => {
      const subPageLocale =
        subPageContent.node_locale || getDefaultLocale(context)
      if (subPageLocale !== locale || subPageLocale in localesDone) {
        return
      }
      localesDone[subPageLocale] = true

      const subPageTokens = tokens.slice()
      subPageTokens.push(subPageContent.node[templateVar])
      const pagePath = subPageTokens.join('')

      console.log('Creating sub page:', pagePath)
      context.createPage({
        component: context.pageTemplate,
        context: getPageContext({ context, page, subPageContent }),
        path: pagePath,
      })
    })
  })
}

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  const context = {
    createPage,
    graphql,
    namedPaths: {},
    options,
    pageTemplate: options.pageTemplate,
    queries: {
      global: {},
      page: {},
      subPage: {},
    },
  } as GatsbyNodeContext

  context.componentConfigs = getConfigsFromOptions(options)

  await runQueries(context)

  buildNamedPaths(context)
  createPages(context)
  createSubPages(context)
}
