import { ALink, Box, Flex, Heading } from '@jacco-meijer/styled-system'
import * as React from 'react'
import { paragraphStyle, simpleLinkStyle, title1Style } from '../../index'

export interface ArticleSectionProps {
  /** Gatsby fetched data */
  data: any
  landMark: any
  locale: any
}

export const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <div>
      <Flex>
        <Heading {...title1Style}>Article section</Heading>
      </Flex>

      <Flex {...paragraphStyle}>
        <Box color="white" bg="lightBlue" p={[4, 5]} w={[1, 1 / 2]}>
          <p>Landmakr: {props.landMark}</p>
        </Box>
        <Box color="white" bg="blue" p={[4, 5]} w={[1, 1 / 2]}>
          <p>Locale: {props.locale}</p>
          <p>
            More
            <ALink {...simpleLinkStyle} href="#somewhere">
              Here is a link
            </ALink>
          </p>
        </Box>
      </Flex>
    </div>
  )
}
