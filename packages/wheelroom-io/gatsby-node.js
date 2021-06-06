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
      globalsCollection {
        items {
          sys {
            id
          }
        }
      }
    }
  }
`)

  data.contentful.pageCollection.items.forEach((page) => {
    actions.createPage({
      path: `${page.path}`,
      component: path.resolve(`./src/components/page/page-template.tsx`),
      context: {
        pageId: page.sys.id,
        globalsId: data.contentful.globalsCollection.items[0].sys.id,
      },
    })
  })
}
