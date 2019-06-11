// @ts-ignore
import Tag from 'clean-tag'
import styled from 'styled-components'

import {
  alignItems,
  alignSelf,
  borderColor,
  borders,
  bottom,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  height,
  justifyContent,
  left,
  order,
  overflow,
  position,
  right,
  space,
  top,
  width,
  zIndex,
} from 'styled-system'

export const Box = styled(Tag)(
  {
    boxSizing: 'border-box',
  },
  alignSelf,
  borderColor,
  borders,
  color,
  flex,
  fontFamily,
  fontSize,
  height,
  order,
  overflow,
  space,
  width,
  props => props.css
)

Box.displayName = 'Box'

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent
)

Flex.displayName = 'Flex'

export const Position = styled(Box)(bottom, left, position, right, top, zIndex)

Position.displayName = 'Position'

export const Container = styled(Box)`
  max-width: 1024px;
`
Container.defaultProps = {
  mx: 'auto',
}
