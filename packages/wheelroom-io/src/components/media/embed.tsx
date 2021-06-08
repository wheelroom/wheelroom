import { Div } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import React from 'react'

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

const embedStyle = {
  margin: '0px',
  position: 'relative',
  height: '0px',
  paddingBottom: '56.25%',
  iframe: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  // TODO: Without 'as any', postion must be with a capital P (which is invalid css)
} as any

export const Embed = (props: EmbedProps) => {
  const __html = (props.model.code && props.model.code) || ''
  if (props.model.type === 'html') {
    return <Div css={embedStyle} dangerouslySetInnerHTML={{ __html }} />
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
