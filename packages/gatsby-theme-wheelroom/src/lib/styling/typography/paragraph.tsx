import * as React from 'react'
import { Alink } from '../system/a-link'
import { GatsbyLink } from '../system/gatsby-link'
import { Text } from '../system/text'

export const BaseParagraph = (props: any) => (
  <Text color="black" fontFamily="text" fontWeight={3} {...props} />
)
export const Pragraph = (props: any) => (
  <BaseParagraph
    fontSize={[2, 2, 3, 3]}
    lineHeight={[7, 8, 9, 10]}
    mb={[2, 3, 4, 5]}
    {...props}
  />
)

export const StyledGatsbyLink = (props: any) => (
  <GatsbyLink
    css={{
      '&:hover': {
        color: 'inherit',
        'text-decoration': 'underline',
      },
      '&:visited': {
        color: 'inherit',
      },
      color: 'inherit',
      'text-decoration': 'none',
    }}
    {...props}
  />
)

export const StyledLink = (props: any) => (
  <Alink
    css={{
      '&:hover': {
        color: 'inherit',
        'text-decoration': 'underline',
      },
      '&:visited': {
        color: 'inherit',
      },
      color: 'inherit',
      'text-decoration': 'none',
    }}
    {...props}
  />
)
