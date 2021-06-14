import { graphql } from 'gatsby'
import { ContentfulTopicSection } from '../topic-section/contentful-topic-section'

export type ContentfulPage = {
  sectionsCollection: {
    items?: ContentfulTopicSection[]
  }
  path?: string
}

export const pageFragment = graphql`
  fragment Page on Contentful_Page {
    sectionsCollection(limit: 20) {
      items {
        ...TopicSection
      }
    }
  }
`
