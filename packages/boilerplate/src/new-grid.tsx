import * as React from 'react'
import { styledSystem } from './styled-system'

export const Box = (props: any) => {
  return <div css={styledSystem(props)} children={props.children} />
}

export const Flex = (props: any) => {
  return <Box display="flex" flexWrap="wrap" {...props} />
}

export const Container = (props: any) => (
  <Flex>
    <Box bg={['yellow', 'red', 'blue']} w={[1, 1 / 2]} {...props} />
    <Box bg={['green', 'grey', 'purple']} w={[1, 1 / 2]} {...props} />
  </Flex>
)
