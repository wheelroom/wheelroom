/** @jsx jsx */
import { jsx } from '@emotion/core'
import { prePreset } from './pre-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface PreProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: 'pre'
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

const getAttrs = (props: PreProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    title: props.title,
  }
  return attrs
}

export const Pre = (props: PreProps) => {
  const label = 'pre'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...prePreset.ncss,
      ...props.wheel.elementPresets.pre.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'pre', attrs, props.children)
}
