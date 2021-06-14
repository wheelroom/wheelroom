import { Div } from '@wheelroom/any/elements'
import { AnyProps } from '@wheelroom/any/any'
import { ContentfulEmbed } from './contentful-embed'

export type Embed = {
  item?: ContentfulEmbed
}

type AnyDivProps = AnyProps['div']
export interface EmbedProps extends AnyDivProps {
  model?: Embed
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

export const Embed = ({ model, ...props }: EmbedProps) => {
  model = model || {}
  const item = model.item || {}
  const __html = (item.code && item.code) || ''
  if (item.type === 'html') {
    return (
      <Div css={embedStyle} dangerouslySetInnerHTML={{ __html }} {...props} />
    )
  }
  return null
}
