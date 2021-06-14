import { graphql } from 'gatsby'
import { Asset } from './asset'

export type MediaBreakpoint = {
  small?: Asset
  medium?: Asset
  large?: Asset
  extraLarge?: Asset
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
