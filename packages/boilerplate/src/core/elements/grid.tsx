/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { InlineElementName, BlockLevelElementName } from './types'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import {
  commonFlexStyle,
  commonContainerStyle,
  commonBoxStyle,
  commonContainerMaxWidthStyle,
} from '../styles/grid'

const getAttrs = (props: GridProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    role: props.role,
    title: props.title,
    'aria-modal': props.ariaModal,
    'aria-label': props.ariaLabel,
    'aria-hidden': props.ariaHidden,
    'tab-index': props.tabIndex,
    onClick: props.onClick,
  }
  return attrs
}

export interface GridProps {
  /** Render as another HTML element */
  is?: InlineElementName | BlockLevelElementName | undefined
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
  /** Grid id attribute */
  id?: string | undefined
  /** Grid role attribute */
  role?: 'modal' | string | undefined
  /** Grid title attribute */
  title?: string | undefined
  /** Grid aria-label attribute */
  ariaLabel?: string | undefined
  /** Grid aria-modal attribute */
  ariaModal?: boolean
  /** Grid aria-hidden attribute */
  ariaHidden?: boolean | undefined
  /** Grid hidden attribute */
  hidden?: boolean | undefined
  /** Grid tabIndex attribute */
  tabIndex?: number | undefined
  /** On click handler */
  onClick?: () => any
}

export const Box = (props: GridProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Box-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: { label, ...commonBoxStyle, ...props.ncss },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Flex = (props: GridProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Flex-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: {
        label,
        ...commonFlexStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const Container = (props: GridProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Container-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: {
        label,
        ...commonContainerStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}

export const ContainerMaxWidth = (props: GridProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `ContainerMaxWidth-${props.is || 'div'}`
  const attrs: any = getAttrs(props)
  attrs.css = systemCss(
    {
      ncss: {
        label,
        ...commonContainerMaxWidthStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  return jsx(props.is || 'div', attrs, props.children)
}
