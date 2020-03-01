/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'

export interface ParagraphProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export const Paragraph = (props: ParagraphProps) => (
  <p css={systemCss({ ncss: props.ncss })}>{props.children}</p>
)
