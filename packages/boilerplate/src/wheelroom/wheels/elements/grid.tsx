/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InlineElementName, BlockLevelElementName } from './types/element-names'
import {
  boxPreset,
  wrapperPreset,
  containerPreset,
  containerMaxWidthPreset,
  flexPreset,
} from './grid-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { LinkRelationshipAttribute } from './types/attribute-names'

export interface GridProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: InlineElementName | BlockLevelElementName | undefined
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** Id attribute */
  id?: string | undefined
  /** Role attribute */
  role?: 'modal' | string | undefined
  /** Title attribute */
  title?: string | undefined
  /** Aria-label attribute */
  ariaLabel?: string | undefined
  /** Aria-modal attribute */
  ariaModal?: boolean
  /** Aria-hidden attribute */
  ariaHidden?: boolean | undefined
  /** Hidden attribute */
  hidden?: boolean | undefined
  /** TabIndex attribute */
  tabIndex?: number | undefined
  /** Relationship attribute */
  rel?: LinkRelationshipAttribute | undefined
  /** On click handler */
  onClick?: () => any
}

const getAttrs = (props: GridProps) => {
  const attrs = {
    id: props.id,
    role: props.role,
    title: props.title,
    'aria-modal': props.ariaModal,
    'aria-label': props.ariaLabel,
    'aria-hidden': props.ariaHidden,
    hidden: props.hidden,
    'tab-index': props.tabIndex,
    rel: props.rel,
    onClick: props.onClick,
  }
  return attrs
}

export const Box = (props: GridProps) => {
  const label = 'box'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...boxPreset.ncss,
      ...props.wheel.elementPresets.box.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'div', attrs, props.children)
}

export const Flex = (props: GridProps) => {
  const label = 'flex'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...flexPreset.ncss,
      ...props.wheel.elementPresets.flex.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'div', attrs, props.children)
}

export const Wrapper = (props: GridProps) => {
  const label = 'wrapper'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...wrapperPreset.ncss,
      ...props.wheel.elementPresets.wrapper.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'div', attrs, props.children)
}

export const Container = (props: GridProps) => {
  const label = 'container'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...containerPreset.ncss,
      ...props.wheel.elementPresets.container.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'div', attrs, props.children)
}

export const ContainerMaxWidth = (props: GridProps) => {
  const label = 'container-max-width'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...containerMaxWidthPreset.ncss,
      ...props.wheel.elementPresets.containerMaxWidth.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'div', attrs, props.children)
}
