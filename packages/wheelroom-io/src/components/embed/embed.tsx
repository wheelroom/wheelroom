import { Div } from '@wheelroom/any/elements'
import { AnyProps } from '@wheelroom/any/any'
import { CSSObject } from '@emotion/react'
import { ContentfulEmbed } from './contentful-embed'

export type Embed = {
  contentfulEmbed?: ContentfulEmbed
}

type AnyDivProps = AnyProps['div']
export interface EmbedProps extends AnyDivProps {
  model?: Embed
}

const embedStyle: CSSObject = {
  margin: 0,
  position: 'relative',
  height: 0,
  paddingBottom: '56.25%',
  iframe: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
}

export const Embed = ({ model, ...props }: EmbedProps) => {
  model = model || {}
  const item = model.contentfulEmbed || {}
  const __html = (item.code && item.code) || ''
  if (item.type === 'html') {
    return (
      <Div css={embedStyle} dangerouslySetInnerHTML={{ __html }} {...props} />
    )
  }
  return null
}
