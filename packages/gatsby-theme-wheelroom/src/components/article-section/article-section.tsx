import * as React from 'react'
import { Box, Flex } from '../../lib/styling/core-elements/grid'
import { Heading } from '../../lib/styling/core-elements/heading'
import { title1Style } from '../../lib/styling/typography/title'

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

      <Flex>
        <Box color="white" bg="lightBlue" w={[1, 1 / 2]}>
          <Box p={[4, 5]}>Landmakr: {props.landMark}</Box>
        </Box>
        <Box color="white" bg="blue" w={[1, 1 / 2]}>
          <Box p={[4, 5]}>Locale: {props.locale}</Box>
        </Box>
      </Flex>
    </div>
  )
}
