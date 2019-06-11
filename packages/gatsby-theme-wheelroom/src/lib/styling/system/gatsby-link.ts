import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { color, space } from 'styled-system'

const GatsbyLink = styled(Link)(color, space)

GatsbyLink.displayName = 'GatsbyLink'

export { GatsbyLink }
