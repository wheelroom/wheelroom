import * as React from 'react'
import { styledSystem } from '../styled-system/styled-system'

export const Text = (props: any) => (
  // @ts-ignore: the function returns the proper function
  <p
    children={props.children}
    css={styledSystem({ textDecoration: 'none', ...props })}
  />
)
