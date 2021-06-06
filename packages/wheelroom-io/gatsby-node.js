const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query {
    contentful {
      pageCollection {
        items {
          sys {
            id
          }
          path
        }
      }
    }
  }
`)

  data.contentful.pageCollection.items.forEach((page) => {
    actions.createPage({
      path: `${page.path}`,
      component: path.resolve(`./src/components/page.tsx`),
      context: {
        pageId: page.sys.id,
        pagePath: page.path,
      },
    })
  })
}
