// @ts-ignore
import Tag from 'clean-tag'
import styled from 'styled-components'

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

const Text = styled(Tag)(
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
  props => props.css
)

Text.displayName = 'Text'

export { Text }
