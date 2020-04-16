/** @jsx jsx */
import { jsx } from '@emotion/core'
import { tablePreset } from './table-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface TableProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: 'table'
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** Id attribute */
  id?: string
  /** Title attribute */
  title?: string
  /** Hidden attribute */
  hidden?: boolean
}

const getAttrs = (props: TableProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    title: props.title,
  }
  return attrs
}

export const Table = (props: TableProps) => {
  const label = 'table'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...tablePreset.ncss,
      ...props.wheel.elementPresets.table.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'table', attrs, props.children)
}
