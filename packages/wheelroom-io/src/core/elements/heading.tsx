/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import {
  heading1Style,
  heading2Style,
  heading3Style,
  heading4Style,
  heading5Style,
  heading6Style,
  commonHeadingStyle,
} from '../styles/heading'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

interface HeadingProps {
  ncss?: any
  children: any
}

export const H1 = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const ncss = props.ncss || {}
  return (
    <h1
      css={systemCss(
        { ncss: { ...commonHeadingStyle, ...heading1Style, ...ncss } },
        currentThemeId
      )}
    >
      {props.children}
    </h1>
  )
}
export const H2 = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const ncss = props.ncss || {}
  return (
    <h2
      css={systemCss(
        { ncss: { ...commonHeadingStyle, ...heading2Style, ...ncss } },
        currentThemeId
      )}
    >
      {props.children}
    </h2>
  )
}
export const H3 = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const ncss = props.ncss || {}
  return (
    <h3
      css={systemCss(
        { ncss: { ...commonHeadingStyle, ...heading3Style, ...ncss } },
        currentThemeId
      )}
    >
      {props.children}
    </h3>
  )
}
export const H4 = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const ncss = props.ncss || {}
  return (
    <h4
      css={systemCss(
        { ncss: { ...commonHeadingStyle, ...heading4Style, ...ncss } },
        currentThemeId
      )}
    >
      {props.children}
    </h4>
  )
}
export const H5 = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const ncss = props.ncss || {}
  return (
    <h5
      css={systemCss(
        { ncss: { ...commonHeadingStyle, ...heading5Style, ...ncss } },
        currentThemeId
      )}
    >
      {props.children}
    </h5>
  )
}
export const H6 = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const ncss = props.ncss || {}
  return (
    <h6
      css={systemCss(
        { ncss: { ...commonHeadingStyle, ...heading6Style, ...ncss } },
        currentThemeId
      )}
    >
      {props.children}
    </h6>
  )
}
