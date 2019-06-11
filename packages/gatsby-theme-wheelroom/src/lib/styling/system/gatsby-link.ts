import { Link } from 'gatsby'
import styled from 'styled-components'

import { color, space } from 'styled-system'

const GatsbyLink = styled(Link)(color, space)

GatsbyLink.displayName = 'GatsbyLink'

export { GatsbyLink }
