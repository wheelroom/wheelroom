import { Global } from '@emotion/core'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Fragment } from 'react'
import { Box, Container, Flex } from './views/core-elements/grid'

const GlobalAStyles = {
  body: {
    margin: 0,
  },
}

// This is the main template used for all pages. Adding a section property here
// will add the property to all sections. Also, changing SEO options here, will
// do so for all pages.
//
const PageTemplate = (props: any) => {
  return (
    <Fragment>
      <Global styles={GlobalAStyles} />
      <Container>
        <Flex color="white" fontSize={[2, 4, 6, 8]}>
          <Box p={5} w={[1, 1 / 2]} bg="red">
            Box
          </Box>
          <Box p={5} w={[1, 1 / 2]} bg="blue">
            Box
          </Box>
        </Flex>
        Sections here
      </Container>
    </Fragment>
  )
}

export default PageTemplate

// This is the main query for all pages. The query is passed the required id's
// from /gatsby-node.js. The id's are used to fetch the appropriate page,
// article and globals. Also all articles are fetched to be used on the article
// overview page.
//

export const query = graphql`
  query($pageId: String) {
    site {
      siteMetadata {
        siteVersion
      }
    }
    page: contentfulPage(id: { eq: $pageId }) {
      navigationTitle
      path
      pathName
      seoDescription
      seoTitle
    }
  }
`
