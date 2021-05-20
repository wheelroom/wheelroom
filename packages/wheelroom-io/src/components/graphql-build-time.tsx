import { Li, Ul } from '@wheelroom/any/elements'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { fontStyle } from '../pages/index'

interface BlogCollectionQuery {
  slug: string
  title: string
}

const GraphqlBuildTime = () => {
  const data = useStaticQuery(dataId)
  return (
    <Ul>
      {data.contentful.blogCollection.items.map((blog: BlogCollectionQuery) => (
        <Li key={blog.slug} css={fontStyle}>
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </Li>
      ))}
    </Ul>
  )
}

export default GraphqlBuildTime

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
