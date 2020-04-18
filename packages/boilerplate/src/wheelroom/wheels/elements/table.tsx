/** @jsx jsx */
import { jsx } from '@emotion/core'
import { tableReset } from './table-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export const Table = (props: ElementProps) => {
  const label = { ncss: { label: 'table' } }
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      tableReset,
      props.wheel.elementPresets.table,
      props.wheel.style,
      props,
    ])
  )
  return jsx('table', attrs, props.children)
}
