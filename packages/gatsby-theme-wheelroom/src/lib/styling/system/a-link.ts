import styled from '@emotion/styled'

import {
  borderColor,
  borders,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
} from 'styled-system'

const Alink = styled.a(
  {
    textDecoration: 'none',
  },
  borders,
  borderColor,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign
)

Alink.displayName = 'Alink'

export { Alink }
