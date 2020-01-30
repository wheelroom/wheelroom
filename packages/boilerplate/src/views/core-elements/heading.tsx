/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const Heading = (props: any) => (
  <div css={emotionCss({ ncss: props.ncss })}>{props.children}</div>
)
