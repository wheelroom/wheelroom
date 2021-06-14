import { graphql } from 'gatsby'
import { Image, ImageProps } from './image'
import { Video, VideoProps } from './video'

export type ContentfulAsset = {
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

export type Asset = Image | Video
export type AssetProps = ImageProps | VideoProps

export const Asset = (props: ImageProps | VideoProps) => {
  const mediaType = (props.model?.asset?.contentType || '').split('/')
  if (mediaType[0] === 'image') {
    return <Image model={props.model} />
  }
  if (mediaType[0] === 'video') {
    return <Video model={props.model} />
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
