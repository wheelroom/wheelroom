import * as path from 'path'
import { globalsPartQuery, pagesQuery } from './default-queries'
import { ContentfulObject, Context, Data, GetContext } from './types'

const DEFAULT_GLOBALS = 'globalsPart'

const getPages = (data: Data): Promise<Data> | Data => {
  return data.graphql(pagesQuery).then(result => {
    if (!result.data) {
      throw new Error('Could not find any pages at Contentful')
    }
    data.pages = result.data.page.edges
    return data
  })
}

const getGlobals = (data: Data): Promise<Data> | Data => {
  const allPromises: Array<Promise<any>> = []

  Object.entries(data.options.globals).forEach(
    ([globalsName, globalsQuery]) => {
      const query =
        globalsName === DEFAULT_GLOBALS && globalsQuery === ''
          ? globalsPartQuery
          : globalsQuery

      allPromises.push(
        data.graphql(query).then(result => {
          data.globals[globalsName] = result.data[globalsName].edges
        })
      )
    }
  )
  return Promise.all(allPromises).then(() => {
    return data
  })
}

const getSubPageContent = (data: Data): Promise<Data> | Data => {
  const allPromises: Array<Promise<any>> = []

  Object.entries(data.options.subPageContent).forEach(
    ([subPageName, subPageQuery]) => {
      allPromises.push(
        data.graphql(subPageQuery).then(result => {
          data.subPageContent[subPageName] = result.data[subPageName].edges
        })
      )
    }
  )
  return Promise.all(allPromises).then(() => {
    return data
  })
}

const getLocale = (page: any) => {
  return page.node_locale.split('-')[0].toLowerCase()
}

const getDefaultLocale = (data: Data): string => {
  return data.options.defaultLocale || 'en'
}

const buildNamedPaths = (data: Data): Promise<Data> | Data => {
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
  return data
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

const createPages = (data: Data): Promise<Data> | Data => {
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
  return data
}

const createSubPages = (data: Data): Promise<Data> | Data => {
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
  return data
}

exports.createPages = ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  return Promise.resolve({
    createPage,
    globals: {},
    graphql,
    namedPaths: {},
    options,
    pageTemplate: path.resolve(options.pageTemplate),
    pages: [],
    subPageContent: {},
  } as Data)
    .then(getPages)
    .then(getGlobals)
    .then(getSubPageContent)
    .then(buildNamedPaths)
    .then(createPages)
    .then(createSubPages)
}
