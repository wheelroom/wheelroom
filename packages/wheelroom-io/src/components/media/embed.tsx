import { Div } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import { AnyProps } from '@wheelroom/any/any'

export type EmbedType =
  | 'html'
  | 'js-action'
  | 'js-app'
  | 'js-page-section'
  | 'js-page'

export type Embed = {
  code?: string
  type?: EmbedType
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
  const __html = (model.code && model.code) || ''
  if (model.type === 'html') {
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
