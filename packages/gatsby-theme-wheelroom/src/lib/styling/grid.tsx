import * as React from 'react'
import { StyledSystem } from './styled-system/styled-system'

export const Box = (props: any) => <StyledSystem {...props} />

export const Flex = (props: any) => {
  return <StyledSystem display="flex" flexWrap="wrap" {...props} />
}

export const Container = (props: any) => (
  <StyledSystem
    mx="auto"
    css={{
      maxWidth: '1024px',
    }}
    {...props}
  />
)
