import { graphql } from 'gatsby'
import { ContentfulAsset } from './contentful-asset'
import { ContentfulEmbed } from './contentful-embed'

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
