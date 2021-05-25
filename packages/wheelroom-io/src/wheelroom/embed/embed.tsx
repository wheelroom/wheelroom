import { Any } from '@wheelroom/any/Any'

export type EmbedType =
  | 'html'
  | 'js-action'
  | 'js-app'
  | 'js-page-section'
  | 'js-page'

export interface EmbedModel {
  code?: {
    code: string
  }
  type?: EmbedType
}
export type EmbedProps = EmbedModel

export const Embed = (props: EmbedProps) => {
  const __html = (props.code && props.code.code) || ''
  if (props.type === 'html') {
    return <Any is="div" dangerouslySetInnerHTML={{ __html }} />
  }
  return null
}
