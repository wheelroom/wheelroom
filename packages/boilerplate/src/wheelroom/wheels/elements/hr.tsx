/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName } from './types/element-names'
import { hrPreset } from './hr-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface HrProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: BlockLevelElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** Grid id attribute */
  id?: string
  /** Title attribute */
  title?: string
  /** Hidden attribute */
  hidden?: boolean
}

const getAttrs = (props: HrProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    title: props.title,
  }
  return attrs
}

export const Hr = (props: HrProps) => {
  const label = 'paragraph'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...hrPreset.ncss,
      ...props.wheel.elementPresets.hr.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'hr', attrs, props.children)
}
