/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { NcssProps } from '../../lib/ncss'
import {
  BlockLevelElementName,
  InlineElementName,
} from '../types/element-names'
import { ElementProps, getElementAttrs } from '../element'
import { ElementStyles } from '../types/element-styles'
import { anyResetMap } from './any-reset'

export interface AnyElementStyle {
  ncss: NcssProps
}

export const anyPreset: AnyElementStyle = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export interface AnyProps extends ElementProps {
  /** Aria-modal attribute */
  ariaModal?: boolean
  /** Render as another HTML element */
  is?: InlineElementName | BlockLevelElementName | undefined
  /** Apply preset styling for the 'is-element' */
  polyPreset?: boolean
  /** Role attribute */
  role?: string
  /** On click handler */
  onClick?: () => any
  /** Inner HTML */
  dangerouslySetInnerHTML?: any
}

const getAttrs = (props: AnyProps) => {
  const attrs = {
    ...getElementAttrs(props),
    'aria-modal': props.ariaModal,
    role: props.role,
    onClick: props.onClick,
  }
  return attrs
}

type ElementStylesKey = keyof ElementStyles

const getPolyPreset = (props: AnyProps) => {
  const resetMap = anyResetMap as any
  let polyPreset = { ncss: {} }
  if (
    props.polyPreset &&
    props.is &&
    Object.keys(resetMap).includes(props.is)
  ) {
    polyPreset = mergeNcss([
      resetMap[props.is],
      props.wheel.elementStyles[props.is as ElementStylesKey],
    ])
  }
  return polyPreset
}

export const Any = (props: AnyProps) => {
  const label = { ncss: { label: `any-is-${props.is}` } }
  const attrs: any = getAttrs(props)
  const polyPreset = getPolyPreset(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      anyPreset,
      props.wheel.elementStyles.any,
      polyPreset,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'div', attrs, props.children)
}
