import { Any } from '@wheelroom/any/Any'

export type EmbedType =
  | 'html'
  | 'js-action'
  | 'js-app'
  | 'js-page-section'
  | 'js-page'

export type EmbedNode = {
  code?: {
    code: string
  }
  type?: EmbedType
}
export interface EmbedProps {
  node: EmbedNode
}

export const Embed = (props: EmbedProps) => {
  const __html = (props.node.code && props.node.code.code) || ''
  if (props.node.type === 'html') {
    return <Any is="div" dangerouslySetInnerHTML={{ __html }} />
  }
  return null
}
