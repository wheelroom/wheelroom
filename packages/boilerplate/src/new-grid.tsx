import { css, jsx } from '@emotion/core'
import * as React from 'react'

export const Box = (props: any) => {
  console.log(props)
  return <div css={{ backgroundColor: props.bg }}>{props.children}</div>
}

export const Container = (props: any) => <Box bg={'red'}>{props.children}</Box>
