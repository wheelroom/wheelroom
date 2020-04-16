/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName, HeadingName } from './types/element-names'
import { Wheel, NcssProps } from '../types'
import { styledSystem } from '@wheelroom/styled-system'
import { headingPresets } from './heading-preset'

interface HeadingElementProps {
  /** Styling wheel */
  wheel: Wheel
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
  const is = props.is || 'h1'
  const label = 'heading'

  // If we have a heading element, apply preset styles
  const presetNcss = {}
  if (Object.keys(headingPresets).includes(is)) {
    Object.assign(
      presetNcss,
      headingPresets[is as HeadingName].ncss,
      props.wheel.elementPresets[is as HeadingName].ncss
    )
  }

  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...presetNcss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })

  const attrs = {
    css,
  }
  return jsx(props.is || 'p', attrs, props.children)
}

export const H1 = (props: HeadingElementProps) => (
  <Heading is="h1" wheel={{ ...props.wheel, style: props.wheel.style }}>
    {props.children}
  </Heading>
)

export const H2 = (props: HeadingElementProps) => (
  <Heading is="h2" wheel={{ ...props.wheel, style: props.wheel.style }}>
    {props.children}
  </Heading>
)

export const H3 = (props: HeadingElementProps) => (
  <Heading is="h3" wheel={{ ...props.wheel, style: props.wheel.style }}>
    {props.children}
  </Heading>
)

export const H4 = (props: HeadingElementProps) => (
  <Heading is="h4" wheel={{ ...props.wheel, style: props.wheel.style }}>
    {props.children}
  </Heading>
)

export const H5 = (props: HeadingElementProps) => (
  <Heading is="h5" wheel={{ ...props.wheel, style: props.wheel.style }}>
    {props.children}
  </Heading>
)

export const H6 = (props: HeadingElementProps) => (
  <Heading is="h6" wheel={{ ...props.wheel, style: props.wheel.style }}>
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
