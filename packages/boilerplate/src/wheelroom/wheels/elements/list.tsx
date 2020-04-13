/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ListElementName } from './types/element-names'
import { listPreset } from './list-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface ListProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: ListElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

export const List = (props: ListProps) => {
  const label = 'list'
  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...listPreset.ncss,
      ...props.wheel.elementPresets.list.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  const attrs = {
    css,
  }
  return jsx(props.is || 'ul', attrs, props.children)
}
