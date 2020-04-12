/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  InlineElementName,
  BlockLevelElementName,
  LinkRelationshipAttribute,
} from './types'
import {
  boxPreset,
  containerPreset,
  containerMaxWidthPreset,
  flexPreset,
} from './grid-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

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
  const label = `box-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.styledSystemTheme,
    {
      ncss: {
        label,
        ...props.wheel.elementPresets.box,
        ...boxPreset,
        ...props.ncss,
      },
    }
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Flex = (props: GridProps) => {
  const label = `flex-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.styledSystemTheme,
    {
      ncss: {
        label,
        ...props.wheel.elementPresets.flex,
        ...flexPreset,
        ...props.ncss,
      },
    }
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Container = (props: GridProps) => {
  const label = `container-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.styledSystemTheme,
    {
      ncss: {
        label,
        ...props.wheel.elementPresets.container,
        ...containerPreset,
        ...props.ncss,
      },
    }
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const ContainerMaxWidth = (props: GridProps) => {
  const label = `container-max-width-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.styledSystemTheme,
    {
      ncss: {
        label,
        ...props.wheel.elementPresets.containerMaxWidth,
        ...containerMaxWidthPreset,
        ...props.ncss,
      },
    }
  )
  return jsx(props.is || 'div', attrs, props.children)
}
