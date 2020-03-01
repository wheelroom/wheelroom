/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'
import { ListElementName } from './styles'

export interface ListProps {
  /** Render as another HTML element */
  is?: ListElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export const List = (props: ListProps) => {
  const label = `List-${props.is}`
  const css = systemCss({
    ncss: { label, ...props.ncss },
  })
  const attrs = {
    css,
  }
  return jsx(props.is || 'ul', attrs, props.children)
}
