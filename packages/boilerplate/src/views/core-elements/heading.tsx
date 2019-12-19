/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css.js'

export const Heading = (props: any) => (
  <div children={props.children} css={emotionCss({ ncss: props.ncss })} />
)
