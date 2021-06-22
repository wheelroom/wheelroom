import { graphql } from 'gatsby'

export type EmbedType =
  | 'html'
  | 'js-action'
  | 'js-app'
  | 'js-page-section'
  | 'js-page'

export type ContentfulEmbed = {
  code?: string
  type?: EmbedType
}

export const embedFragment = graphql`
  fragment Wheelroom_Embed on Contentful_Embed {
    sys {
      id
    }
    type
    code
  }
`
