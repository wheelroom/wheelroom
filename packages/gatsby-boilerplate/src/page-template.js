import { ContentArticleQuery } from './models/content-article-graph'
import { ContentfulPartGlobalsQuery } from './models/part-globals-graph'
import { SectionArticleQuery } from './models/section-article-graph'

import { graphql } from 'gatsby'
import { pageDebug } from '../plugins/gatsby-plugin-wheelroom/page/debug'
import React from 'react'

// This is the main template used for all pages. Adding a section property here
// will add the property to all sections. Also, changing SEO options here, will
// do so for all pages.
//
export const PageTemplate = props => {
  console.log(props)
  pageDebug('PageTemplate', props)

  return (
    <div>
      <h1>FOUND</h1>
      <p>Good! This path does exist!</p>
    </div>
  )
}

// This is the main query for all pages. The query is passed the required id's
// from /gatsby-node.js. The id's are used to fetch the appropriate page,
// article and globals. Also all articles are fetched to be used on the article
// overview page.
//
export const query = graphql`
  query($id: String, $contentArticleId: String, $partGlobalsId: String) {
    site {
      siteMetadata {
        siteVersion
      }
    }
    page: contentfulPage(id: { eq: $id }) {
      navigationTitle
      path
      pathName
      seoDescription
      seoTitle
      sections {
        ... on Node {
          ...SectionArticle
        }
      }
    }
    contentArticle: contentfulContentArticle(id: { eq: $contentArticleId }) {
      ...ContentArticle
    }
    partGlobals: contentfulPartGlobals(id: { eq: $partGlobalsId }) {
      ...PartGlobals
    }
  }
`
