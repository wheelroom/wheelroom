/** @jsx jsx */
import { jsx } from '@emotion/core'
import { blockquotePreset } from './blockquote-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface BlockquoteProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: 'blockquote'
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

const getAttrs = (props: BlockquoteProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    title: props.title,
  }
  return attrs
}

export const Blockquote = (props: BlockquoteProps) => {
  const label = 'blockquote'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...blockquotePreset.ncss,
      ...props.wheel.elementPresets.blockquote.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'blockquote', attrs, props.children)
}
