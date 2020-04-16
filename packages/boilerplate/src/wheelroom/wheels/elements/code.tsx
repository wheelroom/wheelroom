/** @jsx jsx */
import { jsx } from '@emotion/core'
import { codePreset } from './code-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface CodeProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: 'code' | 'kbd' | 'samp'
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

const getAttrs = (props: CodeProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    title: props.title,
  }
  return attrs
}

export const Code = (props: CodeProps) => {
  const label = 'code'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...codePreset.ncss,
      ...props.wheel.elementPresets.code.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'code', attrs, props.children)
}
