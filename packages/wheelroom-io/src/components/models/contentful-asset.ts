import { graphql } from 'gatsby'

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
