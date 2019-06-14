import * as React from 'react'
import { ALink } from '../../lib/styling/core-elements/a-link'
import { Box, Flex } from '../../lib/styling/core-elements/grid'
import { Heading } from '../../lib/styling/core-elements/heading'
import {
  paragraphStyle,
  simpleLinkStyle,
} from '../../lib/styling/typography/paragraph'
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

      <Flex {...paragraphStyle}>
        <Box color="white" bg="lightBlue" w={[1, 1 / 2]}>
          <Box p={[4, 5]}>
            <p>Landmakr: {props.landMark}</p>
          </Box>
        </Box>
        <Box color="white" bg="blue" w={[1, 1 / 2]}>
          <Box p={[4, 5]}>
            <p>Locale: {props.locale}</p>
            <p>
              More
              <ALink {...simpleLinkStyle} href="#somewhere">
                Here is a link
              </ALink>
            </p>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}
