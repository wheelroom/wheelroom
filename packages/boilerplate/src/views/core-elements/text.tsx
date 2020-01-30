/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const Text = (props: any) => (
  <p css={emotionCss({ ncss: props.ncss })}>{props.children}</p>
)
