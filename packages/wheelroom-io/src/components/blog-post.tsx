import { H1, P } from '@wheelroom/any/elements'
import { graphql, PageProps } from 'gatsby'
import { fontStyle } from '../pages/index'
import { DataBlock } from './data-block'

interface BlogQuery {
  contentful: {
    blog: {
      title: string
      heading: string
      slug: string
      abstract: string
      jacco: unknown
    }
  }
}

interface BlogPageContext {
  /** Yaay! 🎉 We can include TypeScript comments ... */
  blogTitle: string
}

/** BlogProps is adding types, like GraphQL Query and PageContext */
type BlogProps = PageProps<BlogQuery, BlogPageContext>

const Blog = (props: BlogProps) => {
  const blog = props.data.contentful.blog
  return (
    <>
      <H1 css={fontStyle}>{props.pageContext.blogTitle}</H1>
      <P css={fontStyle}>{blog.abstract}</P>
      <DataBlock data={blog} />
    </>
  )
}
export default Blog

export const dataId = graphql`
  query data($blogId: String!) {
    contentful {
      blog(id: $blogId) {
        title
        heading
        slug
        abstract
        jacco
      }
    }
  }
`
