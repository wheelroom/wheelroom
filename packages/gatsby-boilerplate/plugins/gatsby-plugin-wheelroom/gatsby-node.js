const path = require('path')
const defaultQueries = require('./default-queries')

const getPages = data => {
  console.log('getPages')

  return data.graphql(defaultQueries.pagesQuery).then(result => {
    data.pages = result.data.page
    return data
  })
}

const getGlobals = data => {
  console.log('getGlobals')
  let allPromises = []

  for (key in data.options.globals) {
    const query = data.options.globals[key] || defaultQueries[key + 'Query']

    allPromises.push(
      data.graphql(query).then(result => {
        data.globals[key] = result.data[key]
        data.globalsIds[key] = {}
      })
    )
  }
  return Promise.all(allPromises).then(() => {
    return data
  })
}

// Build globalIds per locale
const setGlobalsIds = data => {
  console.log('setGlobalsIds')

  for (key in data.globals) {
    data.globals[key].edges.forEach(edge => {
      const locale = edge.node.node_locale.split('-')[0].toLowerCase()
      data.globalsIds[key][locale] = edge.node.id
    })
  }
  return data
}

const getSubPageContent = data => {
  console.log('getSubPageContent')
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

// Build data.namedPaths, with:
// - .path: raw path
// - .en: localized english path
// - .nl: localized dutch path
const buildNamedPaths = data => {
  const defaultLocale = data.options.defaultLocale || 'en'

  data.pages.edges.forEach(edge => {
    const page = edge.node
    if (!(page.pathName in data.namedPaths)) data.namedPaths[page.pathName] = {}
    data.namedPaths[page.pathName].path = page.path
    const locale = getLocale(page)
    const localizedBasePath =
      locale === defaultLocale ? page.path : '/' + locale + page.path
    data.namedPaths[page.pathName][locale] = localizedBasePath
  })
  return data
}

const getLocale = page => {
  return page.node_locale.split('-')[0].toLowerCase()
}

const getContext = ({ data, page }) => {
  return {
    // globalsId: globalIds[locale],
    id: page.id,
    locale: getLocale(page),
    namedPaths: data.namedPaths,
    options: data.options,
  }
}

const createPages = data => {
  console.log('createPages')

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
  console.log('createSubPages')

  data.pages.edges.forEach(edge => {
    const page = edge.node
    console.log('CHECKING PAGE', page.pathName)
    const locale = getLocale(page)
    const localizedBasePath = data.namedPaths[page.pathName][locale]

    // Build sub pages if we find a fieldname like %slug%
    let tokens = localizedBasePath.split('%')
    if (tokens.length == 3) {
      console.log('VALID PAGE', page.pathName)
      templateVar = tokens[1]
      tokens.splice(1, 1)

      data.subPageContent[page.pathName].edges.forEach(subPageContent => {
        console.log('RUNNING CONTENT FOR', page.pathName)
        console.log('subPageContent', subPageContent.node)
        let subPageTokens = tokens.slice()
        subPageTokens.push(subPageContent.node[templateVar])
        const path = subPageTokens.join('')
        let context = getContext({ data, page })
        context.subPageId = subPageContent.node.id
        console.log('Creating sub page:', path)
        data.createPage({
          path: path,
          component: data.pageTemplate,
          context: context,
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
    globals: {},
    globalsIds: {},
    subPageContent: {},
    graphql,
    namedPaths: {},
    options,
    pages: null,
    pageTemplate: path.resolve(options.pageTemplate),
  })
    .then(getPages)
    .then(getGlobals)
    .then(setGlobalsIds)
    .then(getSubPageContent)
    .then(buildNamedPaths)
    .then(createPages)
    .then(createSubPages)
}
