import { graphql } from 'gatsby'
import { ContentfulAction } from '../models/contentful-action'
import { ContentfulAsset } from '../models/contentful-asset'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type ContentfulNavigationSection = {
  __typename?: string
  sys?: {
    id: string
  }
  actions?: ContentfulNavigationSegment
  footerCollection?: {
    items: ContentfulNavigationSegment[]
  }
  headerCollection?: {
    items: ContentfulNavigationSegment[]
  }
  informationCollection?: {
    items: ContentfulNavigationSegment[]
  }
  legal?: ContentfulNavigationSegment
  logo?: ContentfulAsset
  logoAction?: ContentfulAction
  sitemapCollection?: {
    items: ContentfulNavigationSegment[]
  }
  social?: ContentfulNavigationSegment
}

export const fragment = graphql`
  fragment Wheelroom_NavigationSection on Contentful_NavigationSection {
    __typename
    sys {
      id
    }
    title
    actions {
      ...Wheelroom_NavigationSegment
    }
    footerCollection(limit: 5) {
      items {
        ...Wheelroom_NavigationSegment
      }
    }
    headerCollection(limit: 5) {
      items {
        ...Wheelroom_NavigationSegment
      }
    }
    informationCollection(limit: 5) {
      items {
        ...Wheelroom_NavigationSegment
      }
    }
    legal {
      ...Wheelroom_NavigationSegment
    }
    logo {
      ...Wheelroom_Asset
    }
    logoAction {
      ...Wheelroom_Action
    }
    sitemapCollection(limit: 5) {
      items {
        ...Wheelroom_NavigationSegment
      }
    }
    social {
      ...Wheelroom_NavigationSegment
    }
  }
`
