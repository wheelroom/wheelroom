import * as React from 'react'

export const Box = (props: any) => <div />

export const Container = (props: any) => (
  <Box
    mx="auto"
    css={{
      maxWidth: '1024px',
    }}
    {...props}
  />
)
