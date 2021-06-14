import { graphql } from 'gatsby'
import { ContentfulAsset } from '../media/contentful-asset'
import { ContentfulEmbed } from '../media/contentful-embed'

export type ContentfulGlobals = {
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string[]
  siteImage: ContentfulAsset
  siteEmbeds: ContentfulEmbed[]
  skipToContentHeading: string
}

export const fragment = graphql`
  fragment Globals on Contentful_Globals {
    siteAuthor
    siteKeywords
    skipToContentHeading
    siteHeading
    siteDescription
  }
`
