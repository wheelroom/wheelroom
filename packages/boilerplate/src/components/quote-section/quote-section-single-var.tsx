/* eslint-disable react/no-unescaped-entities */
/**
 * Component variation
 *
 * Component type: quoteSection
 * Variation: Single
 *
 */

import React from 'react'
import { getSinglePadding } from '../../styles/global-padding'
import { heading1Style, heading2Style } from '../../styles/heading'
import { paragraph1Style } from '../../styles/paragraph'
import { AvatarImageBox } from '../../views/avatar-image-box/avatar-image-box'
import { Box, Flex } from '../../views/core-elements/grid'
import { Heading } from '../../views/core-elements/heading'
import { Text } from '../../views/core-elements/text'
import { QuoteSectionProps } from './quote-section'

export const QuoteSectionSingleVar = (props: QuoteSectionProps) => {
  const imageSizes = ['100px', '150px', '170px', '200px']
  return (
    <Flex
      ncss={{
        px: getSinglePadding('section', 'left'),
        w: 1,
      }}
    >
      <Box ncss={{ w: imageSizes, h: imageSizes }}>
        <AvatarImageBox image={props.avatar} />
      </Box>
      <Box
        ncss={{
          pl: getSinglePadding('textBox', 'left'),
          w: 2 / 3,
        }}
      >
        <Heading ncss={{ ...heading1Style }}>
          <b>{props.heading}</b>
        </Heading>
        <Heading ncss={{ ...heading2Style }}>{props.subHeading}</Heading>
        <Text ncss={{ ...paragraph1Style }}>"{props.text.text}..."</Text>
      </Box>
    </Flex>
  )
}
