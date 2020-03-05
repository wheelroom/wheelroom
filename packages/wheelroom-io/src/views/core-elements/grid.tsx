/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { InlineElementName, BlockLevelElementName } from './styles'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface GridProps {
  /** Render as another HTML element */
  is?: InlineElementName | BlockLevelElementName
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
}

export interface BoxProps extends GridProps {
  onClick?: () => any
}

export const Box = (props: BoxProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const label = `Box-${props.is || 'div'}`
  const css = systemCss(
    {
      ncss: { label, ...props.ncss },
    },
    currentThemeId
  )
  const attrs = {
    css,
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
        display: 'flex',
        flexWrap: 'wrap',
        label,
        ...props.ncss,
      },
    },
    currentThemeId
  )
  const attrs = {
    css,
    onClick: props.onClick,
  }
  return jsx(props.is || 'div', attrs, props.children)
}

export interface ContainerProps extends GridProps {
  onClick?: () => any
}

export const Container = (props: ContainerProps) => {
  const label = `Container-${props.is || 'div'}`
  const css = systemCss({
    ncss: {
      label,
      display: 'flex',
      px: 3,
      my: 0,
      mx: 'auto',
      ...props.ncss,
    },
  })
  const attrs = {
    css,
    onClick: props.onClick,
  }
  return jsx(props.is || 'div', attrs, props.children)
}
