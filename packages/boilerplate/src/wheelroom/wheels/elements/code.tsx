/** @jsx jsx */
import { jsx } from '@emotion/core'
import { codeReset } from './code-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export const Code = (props: ElementProps) => {
  const label = { ncss: { label: 'code' } }
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      codeReset,
      props.wheel.elementPresets.code,
      props.wheel.style,
      props,
    ])
  )
  return jsx('code', attrs, props.children)
}
