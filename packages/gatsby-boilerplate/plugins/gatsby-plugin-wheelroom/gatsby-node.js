const path = require('path')
const defaultQueries = require('./default-queries')

const getPages = data => {
  return data.graphql(defaultQueries.pagesQuery).then(result => {
    data.pages = result.data.page
    return data
  })
}

const getGlobals = data => {
  let allPromises = []

  for (key in data.options.globals) {
    const query = data.options.globals[key] || defaultQueries[key + 'Query']

    allPromises.push(
      data.graphql(query).then(result => {
        data.globals[key] = result.data[key]
      })
    )
  }
  return Promise.all(allPromises).then(() => {
    return data
  })
}

const getSubPageContent = data => {
  let allPromises = []

  for (key in data.options.subPageContent) {
    allPromises.push(
      data.graphql(data.options.subPageContent[key]).then(result => {
        data.subPageContent[key] = result.data[key]
      })
    )
  }
  return Promise.all(allPromises).then(() => {
    return data
  })
}

const getLocale = page => {
  return page.node_locale.split('-')[0].toLowerCase()
}

const getDefaultLocale = data => {
  return data.options.defaultLocale || 'en'
}

const buildNamedPaths = data => {
  data.pages.edges.forEach(edge => {
    const page = edge.node
    if (!(page.pathName in data.namedPaths)) data.namedPaths[page.pathName] = {}
    data.namedPaths[page.pathName].path = page.path
    const locale = getLocale(page)
    const localizedBasePath =
      locale === getDefaultLocale(data) ? page.path : '/' + locale + page.path
    data.namedPaths[page.pathName][locale] = localizedBasePath
  })
  return data
}

const getContext = ({ data, page, subPageContent }) => {
  let context = {
    // globalsId: globalIds[locale],
    id: page.id,
    locale: getLocale(page),
    namedPaths: data.namedPaths,
    options: data.options,
  }

  // Add ids of Globals
  for (globalsName in data.globals) {
    data.globals[globalsName].edges.forEach(globalsItem => {
      const globalsLocale = globalsItem.node.node_locale
        .split('-')[0]
        .toLowerCase()
      if (globalsLocale === getLocale(page)) {
        context[globalsName + 'Id'] = globalsItem.node.id
      }
    })
  }

  // Add ids of subPage
  if (subPageContent) context[page.pathName + 'Id'] = subPageContent.node.id

  return context
}

const createPages = data => {
  data.pages.edges.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = data.namedPaths[page.pathName][locale]

    let tokens = localizedBasePath.split('%')
    if (tokens.length == 3) return

    console.log('Creating page:', localizedBasePath)
    data.createPage({
      path: localizedBasePath,
      component: data.pageTemplate,
      context: getContext({ data, page }),
    })
  })
  return data
}

const createSubPages = data => {
  data.pages.edges.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = data.namedPaths[page.pathName][locale]

    // Build sub pages if we find a fieldname like %slug%
    let tokens = localizedBasePath.split('%')
    if (tokens.length == 3) {
      templateVar = tokens[1]
      tokens.splice(1, 1)
      let localesDone = {}
      data.subPageContent[page.pathName].edges.forEach(subPageContent => {
        const subPageLocale =
          subPageContent.node_locale || getDefaultLocale(data)
        if (subPageLocale !== locale || subPageLocale in localesDone) return
        localesDone[subPageLocale] = true

        let subPageTokens = tokens.slice()
        subPageTokens.push(subPageContent.node[templateVar])
        const path = subPageTokens.join('')

        console.log('Creating sub page:', path)
        data.createPage({
          path: path,
          component: data.pageTemplate,
          context: getContext({ data, page, subPageContent }),
        })
      })
    }
  })
  return data
}

exports.createPages = ({ graphql, actions }, options) => {
  const { createPage } = actions

  return Promise.resolve({
    createPage,
    // Each key contains the results of a globals query
    globals: {},
    // Each key contains the results of a subPageContent query
    subPageContent: {},
    graphql,
    // Contains for each named path: path: raw path, xx: localized xx path
    namedPaths: {},
    // The plugin configuration options
    options,
    // Results of the page query
    pages: null,
    // Path to the page template used to generate each page
    pageTemplate: path.resolve(options.pageTemplate),
  })
    .then(getPages)
    .then(getGlobals)
    .then(getSubPageContent)
    .then(buildNamedPaths)
    .then(createPages)
    .then(createSubPages)
}
