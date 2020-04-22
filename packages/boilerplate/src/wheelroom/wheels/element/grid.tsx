/** @jsx jsx */
import { BlockLevelElementName, InlineElementName } from './types/element-names'
import {
  boxReset,
  containerReset,
  flexReset,
  fluidReset,
  wrapperReset,
} from './resets/grid-reset'
import { LinkRelationshipAttribute } from './types/attribute-names'
import { ElementProps } from './element'
import { getSelf } from './self'

export interface GridProps extends ElementProps {
  /** Aria-modal attribute */
  ariaModal?: boolean
  /** Render as another HTML element */
  is?: InlineElementName | BlockLevelElementName | undefined
  /** Relationship attribute */
  rel?: LinkRelationshipAttribute | undefined
  /** Role attribute */
  role?: 'modal' | string | undefined
  /** On click handler */
  onClick?: () => any
}

const getExtraAttrs = (props: GridProps) => {
  return {
    'aria-modal': props.ariaModal,
    rel: props.rel,
    role: props.role,
    onClick: props.onClick,
  }
}

export const Box = (props: GridProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, boxReset, 'box', extraAttrs, props.is || 'div')
}

export const Flex = (props: GridProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, flexReset, 'flex', extraAttrs, props.is || 'div')
}

export const Wrapper = (props: GridProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, wrapperReset, 'wrapper', extraAttrs, props.is || 'div')
}

export const Fluid = (props: GridProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, fluidReset, 'fluid', extraAttrs, props.is || 'div')
}

export const Container = (props: GridProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(
    props,
    containerReset,
    'container',
    extraAttrs,
    props.is || 'div'
  )
}
