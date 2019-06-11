// @ts-ignore
import styled from '@emotion/styled'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
} from 'styled-system'

const Text = styled.div(
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign
)

Text.displayName = 'Text'

export { Text }
