/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export interface AnyProps {
  /** Render as another HTML element */
  is?: any
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export const Any = (props: AnyProps) => {
  const css = emotionCss({
    ncss: { ...props.ncss },
  })
  const attrs = {
    css,
  }
  return jsx(props.is || 'div', attrs, props.children)
}
