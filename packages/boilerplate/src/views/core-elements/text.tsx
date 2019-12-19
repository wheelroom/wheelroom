/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css.js'

export const Text = (props: any) => (
  <p children={props.children} css={emotionCss({ ncss: props.ncss })} />
)
