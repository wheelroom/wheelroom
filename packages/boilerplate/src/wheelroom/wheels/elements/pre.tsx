/** @jsx jsx */
import { jsx } from '@emotion/core'
import { preReset } from './pre-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { mergeNcss } from '../../lib/merge-ncss'

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
  const label = { ncss: { label: 'pre' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      preReset,
      props.wheel.elementPresets.pre,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'pre', attrs, props.children)
}
