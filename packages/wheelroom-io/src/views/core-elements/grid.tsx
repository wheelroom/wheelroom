/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'
import { InlineElementName, BlockLevelElementName } from './styles'

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
  const label = `Box-${props.is}` || 'Box-div'
  const css = systemCss({
    ncss: { label, boxSizing: 'border-box', ...props.ncss },
  })
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
  const label = `Flex-${props.is}` || 'Flex-div'
  const css = systemCss({
    ncss: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      label,
      ...props.ncss,
    },
  })
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
  const label = `Container-${props.is}` || 'Container-div'
  const css = systemCss({
    ncss: {
      label,
      maxWidth: '1200px',
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
