/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const Text = (props: any) => (
  <p css={emotionCss({ ncss: props.ncss })}>{props.children}</p>
)

export const Span = (props: any) => (
  <span css={emotionCss({ ncss: props.ncss })}>{props.children}</span>
)

export const Ul = (props: any) => (
  <ul css={emotionCss({ ncss: props.ncss })}>{props.children}</ul>
)

export const Li = (props: any) => (
  <li css={emotionCss({ ncss: props.ncss })}>{props.children}</li>
)
