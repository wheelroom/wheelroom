import { graphql, useStaticQuery } from 'gatsby'

const dataId = graphql`
  query {
    contentful {
      blogCollection {
        items {
          slug
          title
        }
      }
    }
  }
`

const GraphqlBuildTime = () => {
  const data = useStaticQuery(dataId)
  return (
    <>
      {data.contentful.blogCollection.items.map((blog: any) => (
        <p key={blog.slug}>
          <a href={`/blog/${blog.slug}`}>{blog.title}</a>
        </p>
      ))}
    </>
  )
}

export default GraphqlBuildTime
