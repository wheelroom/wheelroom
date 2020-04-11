/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import {
  InlineElementName,
  BlockLevelElementName,
  NcssProps,
  LinkRelationshipAttribute,
} from './types'
import {
  boxPreset,
  containerPreset,
  containerMaxWidthPreset,
  flexPreset,
} from './grid-preset'
import {
  boxStyle,
  containerMaxWidthStyle,
  containerStyle,
  flexStyle,
} from './grid-theme'

export interface GridProps {
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
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `box-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: {
        label,
        ...boxPreset,
        ...boxStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Flex = (props: GridProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `flex-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: {
        label,
        ...flexPreset,
        ...flexStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Container = (props: GridProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `container-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: {
        label,
        ...containerPreset,
        ...containerStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const ContainerMaxWidth = (props: GridProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `container-max-width-is-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: {
        label,
        ...containerMaxWidthPreset,
        ...containerMaxWidthStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}
