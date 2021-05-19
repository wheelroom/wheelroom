import { graphql } from 'gatsby'
import { Pre } from '@wheelroom/Any/elements'
import { preStyle } from '../../components/data-block'

function Blog(props: PageProps) {
  return <Pre css={preStyle}>{JSON.stringify(props.data, null, 2)}</Pre>
}
export default Blog

export const query = graphql`
  query BlogQuery {
    allContentfulBlog {
      edges {
        node {
          id
          slug
          heading
          abstract {
            abstract
          }
        }
      }
    }
  }
`
