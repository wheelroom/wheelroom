/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps, BlockLevelElementName, HeadingName } from './types'
import { headingStyleMap } from '../styles/heading'

interface HeadingProps {
  /** Render as another HTML element */
  is?: BlockLevelElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

export const Heading = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const is = props.is || 'h1'
  const label = `${is}`
  const headingStyle = { label, ...props.ncss }
  // If we have a heading element, apply default style

  if (is in Object.keys(headingStyleMap)) {
    Object.assign(headingStyle, headingStyleMap[is as HeadingName])
  }
  const css = systemCss({ ncss: headingStyle }, currentThemeId)
  const attrs = {
    css,
  }
  return jsx(props.is || 'p', attrs, props.children)
}

export const H1 = (props: HeadingProps) => (
  <Heading is="h1" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H2 = (props: HeadingProps) => (
  <Heading is="h1" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H3 = (props: HeadingProps) => (
  <Heading is="h1" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H4 = (props: HeadingProps) => (
  <Heading is="h1" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H5 = (props: HeadingProps) => (
  <Heading is="h1" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H6 = (props: HeadingProps) => (
  <Heading is="h1" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const HeadingMap = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}
