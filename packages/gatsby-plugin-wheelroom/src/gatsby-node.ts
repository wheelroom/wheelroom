import * as path from 'path'
import { globalsPartQuery, pagesQuery } from './default-queries'
import { ContentfulObject, Context, Data, GetContext } from './types'

const DEFAULT_GLOBALS = 'globalsPart'

const getPages = async (data: Data) => {
  const result = await data.graphql(pagesQuery)

  if (!result.data) {
    throw new Error('Could not find any pages at Contentful')
  }
  data.pages = result.data.page.edges
}

const getGlobals = async (data: Data) => {
  await Promise.all(
    Object.entries(data.options.globals).map(
      async ([globalsName, globalsQuery]) => {
        const query =
          globalsName === DEFAULT_GLOBALS && globalsQuery === ''
            ? globalsPartQuery
            : globalsQuery

        const result = await data.graphql(query)
        data.globals[globalsName] = result.data[globalsName].edges
      }
    )
  )
}

const getSubPageContent = async (data: Data) => {
  await Promise.all(
    Object.entries(data.options.globals).map(
      async ([subPageName, subPageQuery]) => {
        const result = await data.graphql(subPageQuery)
        data.subPageContent[subPageName] = result.data[subPageName].edges
      }
    )
  )
}

const getLocale = (page: any) => {
  return page.node_locale.split('-')[0].toLowerCase()
}

const getDefaultLocale = (data: Data): string => {
  return data.options.defaultLocale || 'en'
}

const buildNamedPaths = (data: Data) => {
  data.pages.forEach((edge: any) => {
    const page = edge.node
    if (!(page.pathName in data.namedPaths)) {
      data.namedPaths[page.pathName] = { path: '' }
    }
    data.namedPaths[page.pathName].path = page.path
    const locale = getLocale(page)
    const localizedBasePath =
      locale === getDefaultLocale(data) ? page.path : '/' + locale + page.path

    // Strip trailing slashes
    data.namedPaths[page.pathName][locale] = localizedBasePath.replace(
      /(.)\/$/,
      '$1'
    )
  })
}

const getContext = ({ data, page, subPageContent }: GetContext) => {
  const context = {
    locale: getLocale(page),
    namedPaths: data.namedPaths,
    pageId: page.id,
  } as Context

  // Add ids of Globals
  Object.entries(data.globals).forEach(([globalsName, globals]) => {
    globals.forEach((globalsItem: ContentfulObject) => {
      const globalsLocale = globalsItem.node.node_locale
        .split('-')[0]
        .toLowerCase()
      if (globalsLocale === getLocale(page)) {
        context[globalsName + 'Id'] = globalsItem.node.id
      }
    })
  })

  // Add ids of subPage
  if (subPageContent) {
    context[page.pathName + 'Id'] = subPageContent.node.id
  }

  return context
}

const createPages = (data: Data) => {
  data.pages.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = data.namedPaths[page.pathName][locale]

    const tokens = localizedBasePath.split('%')
    if (tokens.length === 3) {
      return
    }

    console.log('Creating page:', localizedBasePath)
    data.createPage({
      component: data.pageTemplate,
      context: getContext({ data, page }),
      path: localizedBasePath,
    })
  })
}

const createSubPages = (data: Data) => {
  data.pages.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = data.namedPaths[page.pathName][locale]

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
    data.subPageContent[page.pathName].forEach(subPageContent => {
      const subPageLocale = subPageContent.node_locale || getDefaultLocale(data)
      if (subPageLocale !== locale || subPageLocale in localesDone) {
        return
      }
      localesDone[subPageLocale] = true

      const subPageTokens = tokens.slice()
      subPageTokens.push(subPageContent.node[templateVar])
      const pagePath = subPageTokens.join('')

      console.log('Creating sub page:', pagePath)
      data.createPage({
        component: data.pageTemplate,
        context: getContext({ data, page, subPageContent }),
        path: pagePath,
      })
    })
  })
}

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  const data = {
    createPage,
    globals: {},
    graphql,
    namedPaths: {},
    options,
    pageTemplate: path.resolve(options.pageTemplate),
    pages: [],
    subPageContent: {},
  } as Data

  await getPages(data)
  await getGlobals(data)
  await getSubPageContent(data)

  buildNamedPaths(data)
  createPages(data)
  createSubPages(data)
}
