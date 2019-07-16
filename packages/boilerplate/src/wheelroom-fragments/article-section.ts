/**
 * Graphql fragment
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 * Component name: articleSection
 * Wheelroom type: section
 *
 */

import { graphql } from 'gatsby'
export const fragment = graphql`
  fragment ArticleSection on ContentfulArticleSection {
    __typename
    articleText {
      articleText
    }
    variation
  }
`
