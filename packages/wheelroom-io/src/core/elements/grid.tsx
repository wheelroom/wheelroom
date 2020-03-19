/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { InlineElementName, BlockLevelElementName } from './types'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
import { boxStyle, flexStyle, containerStyle } from '../styles/grid'

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
}

export interface BoxProps extends GridProps {
  onClick?: () => any
}

export const Box = (props: BoxProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Box-${props.is || 'div'}`
  const css = systemCss(
    {
      ncss: { label, ...boxStyle, ...props.ncss },
    },
    currentThemeId
  )
  const attrs = {
    css,
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
  return jsx(props.is || 'div', attrs, props.children)
}

export interface FlexProps extends GridProps {
  onClick?: () => any
}

export const Flex = (props: FlexProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Flex-${props.is || 'div'}`
  const css = systemCss(
    {
      ncss: {
        label,
        ...flexStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  const attrs = {
    css,
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
  return jsx(props.is || 'div', attrs, props.children)
}

export interface ContainerProps extends GridProps {
  onClick?: () => any
}

export const Container = (props: ContainerProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Container-${props.is || 'div'}`
  const css = systemCss(
    {
      ncss: {
        label,
        ...containerStyle,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  const attrs = {
    css,
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
  return jsx(props.is || 'div', attrs, props.children)
}
