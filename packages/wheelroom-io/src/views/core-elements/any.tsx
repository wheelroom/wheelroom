/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'

export interface AnyProps {
  /** Render as another HTML element */
  is: any
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export const Any = (props: AnyProps) => {
  const label = `Any-${props.is}`
  const css = systemCss({
    ncss: { label, ...props.ncss },
  })
  const attrs = {
    css,
  }
  return jsx(props.is || 'div', attrs, props.children)
}
