import { Any } from '@wheelroom/any/Any'
import { graphql } from 'gatsby'

export type EmbedType =
  | 'html'
  | 'js-action'
  | 'js-app'
  | 'js-page-section'
  | 'js-page'

export type Embed = {
  code: string
  type: EmbedType
}
export interface EmbedProps {
  model: Embed
}

export const Embed = (props: EmbedProps) => {
  const __html = (props.model.code && props.model.code) || ''
  if (props.model.type === 'html') {
    return <Any is="div" dangerouslySetInnerHTML={{ __html }} />
  }
  return null
}

export const embedFragment = graphql`
  fragment Embed on Contentful_Embed {
    sys {
      id
    }
    type
    code
  }
`
