import { graphql } from 'gatsby'
import { ContentfulMediaBreakpoint } from './contentful-media-breakpoint'

export type MediaBreakpoint = {
  item?: ContentfulMediaBreakpoint
}

export interface MediaBreakpointProps {
  model?: MediaBreakpoint
}

export const MediaBreakpoint = (props: MediaBreakpointProps) => {
  return null
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
