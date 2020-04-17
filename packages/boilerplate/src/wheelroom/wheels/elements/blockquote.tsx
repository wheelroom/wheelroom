/** @jsx jsx */
import { jsx } from '@emotion/core'
import { blockquoteReset } from './blockquote-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { mergeNcss } from '../../lib/merge-ncss'

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
  const label = { ncss: { label: 'blockquote' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      blockquoteReset,
      props.wheel.elementPresets.blockquote,
      props.wheel.style,
      props,
    ])
  )

  return jsx(props.is || 'blockquote', attrs, props.children)
}
