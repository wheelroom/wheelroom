/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InlineElementName, BlockLevelElementName } from './types/element-names'
import {
  boxReset,
  wrapperReset,
  containerReset,
  containerMaxWidthReset,
  flexReset,
} from './grid-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { LinkRelationshipAttribute } from './types/attribute-names'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export interface GridProps extends ElementProps {
  /** Aria-modal attribute */
  ariaModal?: boolean
  /** Render as another HTML element */
  is?: InlineElementName | BlockLevelElementName | undefined
  /** Relationship attribute */
  rel?: LinkRelationshipAttribute | undefined
  /** Role attribute */
  role?: 'modal' | string | undefined
  /** TabIndex attribute */
  tabIndex?: number | undefined
  /** On click handler */
  onClick?: () => any
}

const getAttrs = (props: GridProps) => {
  const attrs = {
    ...getElementAttrs(props),
    'aria-modal': props.ariaModal,
    rel: props.rel,
    role: props.role,
    onClick: props.onClick,
  }
  return attrs
}

export const Box = (props: GridProps) => {
  const label = { ncss: { label: 'box' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      boxReset,
      props.wheel.elementPresets.box,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Flex = (props: GridProps) => {
  const label = { ncss: { label: 'flex' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      flexReset,
      props.wheel.elementPresets.flex,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Wrapper = (props: GridProps) => {
  const label = { ncss: { label: 'wrapper' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      wrapperReset,
      props.wheel.elementPresets.wrapper,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Container = (props: GridProps) => {
  const label = { ncss: { label: 'container' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      containerReset,
      props.wheel.elementPresets.container,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const ContainerMaxWidth = (props: GridProps) => {
  const label = { ncss: { label: 'container-max-width' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      containerMaxWidthReset,
      props.wheel.elementPresets.containerMaxWidth,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'div', attrs, props.children)
}
