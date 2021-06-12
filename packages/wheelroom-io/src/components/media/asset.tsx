import { graphql } from 'gatsby'
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
  poster?: Asset
}

export const Asset = (props: AssetProps) => {
  const mediaType = props.model.contentType.split('/')
  if (mediaType[0] === 'image') {
    return <Image asset={props.model} />
  }
  if (mediaType[0] === 'video') {
    return <Video asset={props.model} poster={props.poster} />
  }
  return null
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
