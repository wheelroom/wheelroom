import styled from '@emotion/styled'
import * as React from 'react'

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

export const Box = styled('div')(
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
  width
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

export const Container = (props: any) => (
  <Box
    mx="auto"
    css={{
      maxWidth: '1024px',
    }}
    {...props}
  />
)
