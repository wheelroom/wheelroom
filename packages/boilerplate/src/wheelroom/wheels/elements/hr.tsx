/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName } from './types/element-names'
import { hrReset } from './hr-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { mergeNcss } from '../../lib/merge-ncss'

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
  const label = { ncss: { label: 'hr' } }
  const attrs: any = getAttrs(props)
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

  return jsx(props.is || 'hr', attrs, props.children)
}
