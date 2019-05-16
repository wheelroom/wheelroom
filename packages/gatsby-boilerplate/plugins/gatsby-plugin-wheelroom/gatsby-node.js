const path = require('path')

exports.createPages = ({ graphql, actions }, options) => {
  const { createPage } = actions
  const defaultLocale = options.defaultLocale || 'en'

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./page-template.jsx')

    resolve(
      graphql(
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
            globals: allContentfulPartGlobals {
              edges {
                node {
                  id
                  node_locale
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error('Error creating pages', result)
          reject(result.errors)
        }
        // Build namedPaths, with:
        // - .path: raw path
        // - .en: localized english path
        // - .nl: localized dutch path
        let namedPaths = {}
        result.data.pages.edges.forEach(edge => {
          const page = edge.node
          if (!(page.pathName in namedPaths)) namedPaths[page.pathName] = {}
          namedPaths[page.pathName].path = page.path
          const locale = page.node_locale.split('-')[0].toLowerCase()
          const localizedBasePath =
            locale === defaultLocale ? page.path : '/' + locale + page.path
          namedPaths[page.pathName][locale] = localizedBasePath
        })
        // Build globalIds per locale
        let globalIds = {}
        result.data.globals.edges.forEach(edge => {
          const locale = edge.node.node_locale.split('-')[0].toLowerCase()
          globalIds[locale] = edge.node.id
        })
        // Build pages and sub pages
        result.data.pages.edges.forEach(edge => {
          const page = edge.node
          const locale = page.node_locale.split('-')[0].toLowerCase()
          const localizedBasePath = namedPaths[page.pathName][locale]
          const baseContext = {
            globalsId: globalIds[locale],
            id: page.id,
            locale: locale,
            namedPaths,
            options,
          }
          // Build sub pages if we find a fieldname like %slug%
          let tokens = localizedBasePath.split('%')
          if (tokens.length == 3) {
            templateVar = tokens[1]
            tokens.splice(1, 1)
            result.data[page.pathName].edges.forEach(subPage => {
              let subPageTokens = tokens.slice()
              subPageTokens.push(subPage.node[templateVar])
              const path = subPageTokens.join('')
              let context = Object.assign({}, baseContext)
              context.subPageId = subPage.node.id
              console.log('Creating sub page:', path)
              createPage({
                path: path,
                component: pageTemplate,
                context: context,
              })
            })
          } else {
            // Not a sub page, then build main page
            console.log('Creating page:', localizedBasePath)
            createPage({
              path: localizedBasePath,
              component: pageTemplate,
              context: Object.assign({}, baseContext),
            })
          }
        })
        return
      })
    )
  })
}
