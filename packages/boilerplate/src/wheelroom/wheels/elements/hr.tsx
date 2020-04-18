/** @jsx jsx */
import { jsx } from '@emotion/core'
import { hrReset } from './hr-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export const Hr = (props: ElementProps) => {
  const label = { ncss: { label: 'hr' } }
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      hrReset,
      props.wheel.elementPresets.hr,
      props.wheel.style,
      props,
    ])
  )
  return jsx('hr', attrs, props.children)
}
