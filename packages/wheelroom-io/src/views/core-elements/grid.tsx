/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'
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
  const css = emotionCss({
    ncss: { boxSizing: 'border-box', ...props.ncss },
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
  const css = emotionCss({
    ncss: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
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
  const css = emotionCss({
    ncss: {
      mx: 'auto',
      maxWidth: '1200px',
      ...props.ncss,
    },
  })
  const attrs = {
    css,
    onClick: props.onClick,
  }
  return jsx(props.is || 'div', attrs, props.children)
}
