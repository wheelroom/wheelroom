import { Link } from 'gatsby'
import * as React from 'react'
import { styledSystem } from '../styled-system/styled-system'

export const GatsbyLink = (props: any) => (
  // @ts-ignore: the function returns the proper function
  <Link
    children={props.children}
    css={styledSystem({ textDecoration: 'none', ...props })}
    href={props.href}
    to={props.to}
  />
)
