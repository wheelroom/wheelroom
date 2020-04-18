/** @jsx jsx */
import { jsx } from '@emotion/core'
import { preReset } from './pre-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export const Pre = (props: ElementProps) => {
  const label = { ncss: { label: 'pre' } }
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      preReset,
      props.wheel.elementPresets.pre,
      props.wheel.style,
      props,
    ])
  )
  return jsx('pre', attrs, props.children)
}
