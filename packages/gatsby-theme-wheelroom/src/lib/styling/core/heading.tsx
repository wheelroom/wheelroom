import * as React from 'react'
import { styledSystem } from '../styled-system/styled-system'

export const Heading = (props: any) => (
  // @ts-ignore: the function returns the proper function
  <div
    children={props.children}
    css={styledSystem({ textDecoration: 'none', ...props })}
  />
)
