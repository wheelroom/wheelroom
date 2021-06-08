import { Div } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import React from 'react'
import { MediaOptions } from './media-options'
import { mediaVariantStyle } from './media-variant-style'
import { MediaVariantMap } from './media-variants'

export type Media = {
  sys: {
    id: string
  }
  contentType: string
  description: string
  fileName: string
  height: number
  size: number
  title: string
  url: string
  width: number
}

export interface MediaProps {
  model: Media
  options: MediaOptions
  variantMap: MediaVariantMap
}

export const Media = (props: MediaProps) => {
  return (
    <Div css={mediaVariantStyle({ variant: props.variantMap.media })}>
      Media here
    </Div>
  )
}

export const mediaFragment = graphql`
  fragment Media on Contentful_Asset {
    sys {
      id
    }
    contentType
    description
    fileName
    height
    size
    title
    url
    width
  }
`
