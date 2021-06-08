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
  if (!(data && data.contentful && data.contentful.pageCollection)) {
    console.log(`Could not connect to ${process.env.GATSBY_CONTENTFUL_GRAPHQL_ENDPOINT}`)
    process.exit(1)
  }
  data.contentful.pageCollection.items.forEach((page) => {
    actions.createPage({
      path: `${page.path}`,
      component: path.resolve(`./src/components/page/page.tsx`),
      context: {
        pageId: page.sys.id,
        globalsId: data.contentful.globalsCollection.items[0].sys.id,
      },
    })
  })
}
