import * as React from 'react'
import { parseStyles } from './parse-styles'

// Small wrapper that allows us to do: css={styledSystem(props)}
export const styledSystem = (props: any) => (theme: any) =>
  parseStyles(theme, props)

export const StyledSystem = (props: any) => {
  // @ts-ignore: the function returns the proper function
  return <div css={styledSystem(props)} children={props.children} />
}
