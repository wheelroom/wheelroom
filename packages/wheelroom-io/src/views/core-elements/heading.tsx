/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'
import {
  heading1Style,
  heading2Style,
  heading3Style,
  heading4Style,
  heading5Style,
  heading6Style,
} from '../../styles/heading'

interface HeadingProps {
  ncss: any
  children: any
}

export const H1 = (props: HeadingProps) => (
  <h1 css={emotionCss({ ncss: { ...heading1Style, ...props.ncss } })}>
    {props.children}
  </h1>
)

export const H2 = (props: HeadingProps) => (
  <h2 css={emotionCss({ ncss: { ...heading2Style, ...props.ncss } })}>
    {props.children}
  </h2>
)

export const H3 = (props: HeadingProps) => (
  <h3 css={emotionCss({ ncss: { ...heading3Style, ...props.ncss } })}>
    {props.children}
  </h3>
)

export const H4 = (props: HeadingProps) => (
  <h4 css={emotionCss({ ncss: { ...heading4Style, ...props.ncss } })}>
    {props.children}
  </h4>
)

export const H5 = (props: HeadingProps) => (
  <h5 css={emotionCss({ ncss: { ...heading5Style, ...props.ncss } })}>
    {props.children}
  </h5>
)

export const H6 = (props: HeadingProps) => (
  <h6 css={emotionCss({ ncss: { ...heading6Style, ...props.ncss } })}>
    {props.children}
  </h6>
)
