import * as React from 'react'
import { Heading } from '../system/heading'

export const BaseTitle = (props: any) => (
  <Heading color="black" fontFamily="heading" fontWeight={6} {...props} />
)

export const Title1 = (props: any) => (
  <BaseTitle
    fontSize={[4, 4, 5, 6]}
    lineHeight={[3, 3, 4, 5]}
    mb={3}
    {...props}
  />
)

export const Title2 = (props: any) => (
  <BaseTitle
    fontSize={[3, 3, 4, 5]}
    lineHeight={[3, 3, 4, 5]}
    mb={2}
    {...props}
  />
)

export const Title3 = (props: any) => (
  <BaseTitle
    fontSize={[1, 2, 3, 4]}
    lineHeight={[2, 2, 3, 4]}
    mb={1}
    {...props}
  />
)

export const Title4 = (props: any) => (
  <BaseTitle
    fontSize={[1, 1, 2, 3]}
    lineHeight={[2, 2, 3, 4]}
    mb={1}
    {...props}
  />
)
