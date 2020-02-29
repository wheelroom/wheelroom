/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export interface ParagraphProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export const Paragraph = (props: ParagraphProps) => (
  <p css={emotionCss({ ncss: props.ncss })}>{props.children}</p>
)
