import { graphql } from 'gatsby'
import { ContentfulAction } from '../models/contentful-action'

export type ContentfulNavigationSegment = {
  sys?: {
    id: string
  }
  heading?: string
  abstract?: string
  actionsCollection?: {
    items: ContentfulAction[]
  }
}

export const fragment = graphql`
  fragment Wheelroom_NavigationSegment on Contentful_NavigationSegment {
    sys {
      id
    }
    heading
    abstract
    actionsCollection(limit: 5) {
      items {
        ...Wheelroom_Action
      }
    }
  }
`
