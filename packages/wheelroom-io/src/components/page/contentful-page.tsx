import { graphql } from 'gatsby'
import { ContentfulPageSection } from './page-section'

export type ContentfulPage = {
  sectionsCollection: {
    items?: ContentfulPageSection[]
  }
  path?: string
}

export const pageFragment = graphql`
  fragment Page on Contentful_Page {
    sectionsCollection(limit: 20) {
      items {
        ...TopicSection
        ...NavigationSection
        ...TextSection
      }
    }
  }
`
