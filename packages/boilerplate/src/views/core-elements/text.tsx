/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const Text = (props: any) => (
  <p children={props.children} css={emotionCss({ ncss: props.ncss })} />
)
