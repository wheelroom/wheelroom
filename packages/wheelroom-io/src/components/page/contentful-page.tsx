import { graphql } from 'gatsby'
import { ContentfulPageSection } from './page-section'

export type ContentfulPage = {
  __typename?: string
  sys?: {
    id: string
  }
  sectionsCollection?: {
    items: ContentfulPageSection[]
  }
  path?: string
}

export const pageFragment = graphql`
  fragment Wheelroom_Page on Contentful_Page {
    __typename
    sys {
      id
    }
    sectionsCollection(limit: 5) {
      items {
        ...Wheelroom_TopicSection
        ...Wheelroom_NavigationSection
        ...Wheelroom_TextSection
      }
    }
  }
`
