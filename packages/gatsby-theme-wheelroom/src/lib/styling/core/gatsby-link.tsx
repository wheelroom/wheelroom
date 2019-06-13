/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { styledSystem } from '../styled-system/styled-system'

export const GatsbyLink = (props: any) => (
  <Link
    children={props.children}
    css={styledSystem({ textDecoration: 'none', ...props })}
    to={props.to}
  />
)
