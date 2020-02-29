/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'
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
  const css = emotionCss({
    ncss: { ...props.ncss },
  })
  const attrs = {
    css,
  }
  return jsx(props.is || 'ul', attrs, props.children)
}
