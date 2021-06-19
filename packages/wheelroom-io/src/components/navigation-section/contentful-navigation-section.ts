import { graphql } from 'gatsby'
import { ContentfulAction } from '../action/contentful-action'
import { ContentfulAsset } from '../asset/contentful-asset'
import { ContentfulNavigationSegment } from '../navigation-segment/contentful-navigation-segment'

export type ContentfulNavigationSection = {
  __typename: string
  sys?: {
    id: string
  }
  actions: ContentfulNavigationSegment
  footerCollection: {
    items: ContentfulNavigationSegment[]
  }
  headerCollection: {
    items: ContentfulNavigationSegment[]
  }
  informationCollection: {
    items: ContentfulNavigationSegment[]
  }
  legal: ContentfulNavigationSegment
  logo: ContentfulAsset
  logoAction: ContentfulAction
  sitemapCollection: {
    items: ContentfulNavigationSegment[]
  }
  social: ContentfulNavigationSegment
}

export const fragment = graphql`
  fragment NavigationSection on Contentful_NavigationSection {
    __typename
    sys {
      id
    }
    title
    actions {
      ...NavigationSegment
    }
    footerCollection(limit: 5) {
      items {
        ...NavigationSegment
      }
    }
    headerCollection(limit: 5) {
      items {
        ...NavigationSegment
      }
    }
    informationCollection(limit: 5) {
      items {
        ...NavigationSegment
      }
    }
    legal {
      ...NavigationSegment
    }
    logo {
      ...Asset
    }
    logoAction {
      ...Action
    }
    sitemapCollection(limit: 5) {
      items {
        ...NavigationSegment
      }
    }
    social {
      ...NavigationSegment
    }
  }
`
