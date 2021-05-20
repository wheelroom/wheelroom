import { graphql } from 'gatsby'
import { DataBlock } from './data-block'

const Blog = (props: any) => {
  const blog = props.data.contentful.blog

  return (
    <>
      <h1>{props.pageContext.blogTitle}</h1>
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
