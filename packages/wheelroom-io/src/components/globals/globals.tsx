import { graphql } from 'gatsby'
import { Embed } from '../embed/embed'
import { Asset } from '../media/asset'

export type Globals = {
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string[]
  siteImage: Asset
  siteEmbeds: Embed[]
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
