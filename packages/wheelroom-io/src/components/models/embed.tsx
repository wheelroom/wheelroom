import { Div } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { ContentfulEmbed } from './contentful-embed'

export type Embed = {
  contentfulEmbed?: ContentfulEmbed
}
export type EmbedProps = ComponentProps<Embed>['div']

const baseStyle = {
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

export const embedStyleFactory: StyleFactory = () => {
  return mediaQuery([baseStyle])
}

export const Embed = ({ model, ...props }: EmbedProps) => {
  const css: any = embedStyleFactory({})
  model = model || {}
  const item = model.contentfulEmbed || {}
  const __html = (item.code && item.code) || ''
  if (item.type === 'html') {
    return <Div css={css} dangerouslySetInnerHTML={{ __html }} {...props} />
  }
  return null
}
