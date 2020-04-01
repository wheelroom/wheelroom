/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps, BlockLevelElementName, HeadingName } from './types'
import {
  headingStyleMap,
  commonHeadingStyle,
} from '../../styles/core-elements/heading'

interface HeadingElementProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

interface HeadingProps extends HeadingElementProps {
  /** Render as another HTML element */
  is?: BlockLevelElementName
}

export const Heading = (props: HeadingProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const is = props.is || 'h1'
  const label = `${is}`

  // If we have a heading element, apply default style
  const defaultHeadingStyle = Object.keys(headingStyleMap).includes(is)
    ? headingStyleMap[is as HeadingName]
    : {}

  const headingStyle = Object.assign(
    {},
    commonHeadingStyle,
    defaultHeadingStyle,
    { label },
    props.ncss
  )

  const css = systemCss({ ncss: headingStyle }, currentThemeId)
  const attrs = {
    css,
  }
  return jsx(props.is || 'p', attrs, props.children)
}

export const H1 = (props: HeadingElementProps) => (
  <Heading is="h1" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H2 = (props: HeadingElementProps) => (
  <Heading is="h2" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H3 = (props: HeadingElementProps) => (
  <Heading is="h3" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H4 = (props: HeadingElementProps) => (
  <Heading is="h4" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H5 = (props: HeadingElementProps) => (
  <Heading is="h5" ncss={props.ncss}>
    {props.children}
  </Heading>
)

export const H6 = (props: HeadingElementProps) => (
  <Heading is="h6" ncss={props.ncss}>
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
