import { graphql } from 'gatsby'
import React from 'react'
import { Image } from './image'
import { Video } from './video'

export type Asset = {
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

export interface AssetProps {
  model: Asset
}

export const Asset = (props: AssetProps) => {
  let Element: typeof Image | typeof Video = () => null
  const mediaType = props.model.contentType.split('/')
  if (mediaType[0] === 'image') {
    Element = Image
  }
  if (mediaType[0] === 'video') {
    Element = Video
  }

  return <Element asset={props.model} />
}

export const assetFragment = graphql`
  fragment Asset on Contentful_Asset {
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
