/** @jsx jsx */
import { jsx } from '@emotion/core'
import { blockquoteReset } from './blockquote-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export const Blockquote = (props: ElementProps) => {
  const label = { ncss: { label: 'blockquote' } }
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      blockquoteReset,
      props.wheel.elementPresets.blockquote,
      props.wheel.style,
      props,
    ])
  )
  return jsx('blockquote', attrs, props.children)
}
