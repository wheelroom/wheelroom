const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      contentful {
        blogCollection {
          items {
            slug
            title
            sys {
              id
            }
          }
        }
      }
    }
  `)

  data.contentful.blogCollection.items.forEach((blog) => {
    actions.createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`./src/components/blog-post.tsx`),
      context: {
        blogId: blog.sys.id,
        blogTitle: blog.title,
      },
    })
  })
}
