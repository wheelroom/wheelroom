/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'
import {
  heading1Style,
  heading2Style,
  heading3Style,
  heading4Style,
  heading5Style,
  heading6Style,
} from '../../styles/heading'

interface HeadingProps {
  ncss?: any
  children: any
}

export const H1 = (props: HeadingProps) => {
  const ncss = props.ncss || {}
  return (
    <h1 css={systemCss({ ncss: { ...heading1Style, ...ncss } })}>
      {props.children}
    </h1>
  )
}
export const H2 = (props: HeadingProps) => {
  const ncss = props.ncss || {}
  return (
    <h2 css={systemCss({ ncss: { ...heading2Style, ...ncss } })}>
      {props.children}
    </h2>
  )
}
export const H3 = (props: HeadingProps) => {
  const ncss = props.ncss || {}
  return (
    <h3 css={systemCss({ ncss: { ...heading3Style, ...ncss } })}>
      {props.children}
    </h3>
  )
}
export const H4 = (props: HeadingProps) => {
  const ncss = props.ncss || {}
  return (
    <h4 css={systemCss({ ncss: { ...heading4Style, ...ncss } })}>
      {props.children}
    </h4>
  )
}
export const H5 = (props: HeadingProps) => {
  const ncss = props.ncss || {}
  return (
    <h5 css={systemCss({ ncss: { ...heading5Style, ...ncss } })}>
      {props.children}
    </h5>
  )
}
export const H6 = (props: HeadingProps) => {
  const ncss = props.ncss || {}
  return (
    <h6 css={systemCss({ ncss: { ...heading6Style, ...ncss } })}>
      {props.children}
    </h6>
  )
}
