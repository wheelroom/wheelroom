/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { strongPreset } from './strong-preset'

export interface StrongProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: 'strong' | 'b'
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

const getAttrs = (props: StrongProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    title: props.title,
  }
  return attrs
}

export const Strong = (props: StrongProps) => {
  const label = `strong`
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...strongPreset.ncss,
      ...props.wheel.elementPresets.strong.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })

  return jsx(props.is || 'strong', attrs, props.children)
}
