/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName, HeadingName } from './types/element-names'
import { styledSystem, StyledSystemTheme } from '@wheelroom/styled-system'
import { headingResets } from './resets/heading-reset'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export interface HeadingProps extends ElementProps {
  /** Render as another HTML element */
  is?: BlockLevelElementName
}

// If we have a heading element, apply preset styles
const getReset = (props: HeadingProps) => {
  let reset = { ncss: {} }
  const is = props.is || 'h1'
  if (Object.keys(headingResets).includes(is)) {
    reset = mergeNcss([
      headingResets[is as HeadingName],
      props.wheel.elementStyles[is as HeadingName],
    ])
  }
  return reset
}

export const Heading = (props: HeadingProps) => {
  const label = { ncss: { label: 'heading' } }
  const reset = getReset(props)
  const attrs: any = getElementAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    (props.wheel.theme as unknown) as StyledSystemTheme,
    mergeNcss([label, reset, props.wheel.style, props])
  )
  return jsx(props.is || 'h1', attrs, props.children)
}

export const H1 = (props: ElementProps) => (
  <Heading is="h1" wheel={props.wheel}>
    {props.children}
  </Heading>
)

export const H2 = (props: ElementProps) => (
  <Heading is="h2" wheel={props.wheel}>
    {props.children}
  </Heading>
)

export const H3 = (props: ElementProps) => (
  <Heading is="h3" wheel={props.wheel}>
    {props.children}
  </Heading>
)

export const H4 = (props: ElementProps) => (
  <Heading is="h4" wheel={props.wheel}>
    {props.children}
  </Heading>
)

export const H5 = (props: ElementProps) => (
  <Heading is="h5" wheel={props.wheel}>
    {props.children}
  </Heading>
)

export const H6 = (props: ElementProps) => (
  <Heading is="h6" wheel={props.wheel}>
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
