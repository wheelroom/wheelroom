const path = require('path')

const getPages = function(data) {
  console.log('getPages')

  return data
    .graphql(
      `
      {
        pages: allContentfulPage {
          edges {
            node {
              id
              node_locale
              path
              pathName
            }
          }
        }
      }
    `
    )
    .then(result => {
      data.pages = result.data.pages
      return data
    })
}

// Build data.namedPaths, with:
// - .path: raw path
// - .en: localized english path
// - .nl: localized dutch path
const buildNamedPaths = function(data) {
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

const getGlobals = function(data) {
  console.log('getGlobals')
  return data

  // Build globalIds per locale
  let globalIds = {}
  result.data.globals.edges.forEach(edge => {
    const locale = edge.node.node_locale.split('-')[0].toLowerCase()
    globalIds[locale] = edge.node.id
  })
}

const getLocale = function(page) {
  return page.node_locale.split('-')[0].toLowerCase()
}

const getContext = function({ data, page }) {
  return {
    // globalsId: globalIds[locale],
    id: page.id,
    locale: getLocale(page),
    namedPaths: data.namedPaths,
    options: data.options,
  }
}

const createPages = function(data) {
  console.log('createPages')

  data.pages.edges.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = data.namedPaths[page.pathName][locale]

    console.log('Creating page:', localizedBasePath)
    data.createPage({
      path: localizedBasePath,
      component: data.pageTemplate,
      context: getContext({ data, page }),
    })
  })
  return data
}

const createSubPages = function(data) {
  console.log('createSubPages')

  data.pages.edges.forEach(edge => {
    const page = edge.node
    const locale = getLocale(page)
    const localizedBasePath = data.namedPaths[page.pathName][locale]

    // Build sub pages if we find a fieldname like %slug%
    let tokens = localizedBasePath.split('%')
    if (tokens.length == 3) {
      templateVar = tokens[1]
      tokens.splice(1, 1)
      result.data[page.pathName].edges.forEach(subPage => {
        let subPageTokens = tokens.slice()
        subPageTokens.push(subPage.node[templateVar])
        const path = subPageTokens.join('')
        let context = getContext({ data, page })
        context.subPageId = subPage.node.id
        console.log('Creating sub page:', path)
        createPage({
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
    globals: null,
    graphql,
    namedPaths: {},
    options,
    pages: null,
    pageTemplate: path.resolve('plugins/gatsby-plugin-wheelroom/page/page.jsx'),
  })
    .then(getPages)
    .then(buildNamedPaths)
    .then(getGlobals)
    .then(createPages)
    .then(createSubPages)
}
