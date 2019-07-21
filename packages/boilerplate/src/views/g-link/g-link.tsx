/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@jacco-meijer/styled-system'
import { Link } from 'gatsby'

export const GLink = (props: any) => (
  <Link
    children={props.children}
    css={styledSystem({ textDecoration: 'none', ...props })}
    to={props.to}
  />
)
