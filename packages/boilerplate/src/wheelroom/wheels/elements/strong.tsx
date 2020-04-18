/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { strongReset } from './strong-reset'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export const Strong = (props: ElementProps) => {
  const label = { ncss: { label: 'strong' } }
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      strongReset,
      props.wheel.elementPresets.strong,
      props.wheel.style,
      props,
    ])
  )

  return jsx('b', attrs, props.children)
}
