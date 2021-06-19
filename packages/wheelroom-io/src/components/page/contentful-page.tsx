import { graphql } from 'gatsby'
import { ContentfulPageSection } from './page-section'

export type ContentfulPage = {
  sys?: {
    id: string
  }
  sectionsCollection: {
    items?: ContentfulPageSection[]
  }
  path?: string
}

export const pageFragment = graphql`
  fragment Page on Contentful_Page {
    sys {
      id
    }
    sectionsCollection(limit: 5) {
      items {
        ...TopicSection
        ...NavigationSection
        ...TextSection
      }
    }
  }
`
