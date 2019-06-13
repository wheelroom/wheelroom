import * as React from 'react'
import { styledSystem } from '../styled-system/styled-system'

export const Box = (props: any) => (
  // @ts-ignore: the function returns the proper function
  <div css={styledSystem(props)} children={props.children} />
)

export const Flex = (props: any) => (
  // @ts-ignore: the function returns the proper function
  <div
    css={styledSystem({ display: 'flex', flexWrap: 'wrap', ...props })}
    children={props.children}
  />
)

export const Container = (props: any) => (
  // @ts-ignore: the function returns the proper function
  <div
    css={styledSystem({ mx: 'auto', maxWidth: '1024px', ...props })}
    children={props.children}
  />
)
