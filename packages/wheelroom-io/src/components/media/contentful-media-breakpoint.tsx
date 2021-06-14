import { graphql } from 'gatsby'
import { ContentfulAsset } from './contentful-asset'

export type ContentfulMediaBreakpoint = {
  small?: ContentfulAsset
  medium?: ContentfulAsset
  large?: ContentfulAsset
  extraLarge?: ContentfulAsset
}

export const mediaBreakpointFragment = graphql`
  fragment MediaBreakpoint on Contentful_MediaBreakpoint {
    sys {
      id
    }
    extraLarge {
      ...Asset
    }
    large {
      ...Asset
    }
    medium {
      ...Asset
    }
    small {
      ...Asset
    }
  }
`
