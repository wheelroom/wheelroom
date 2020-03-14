/**
 * Component variation
 *
 * Component type: quoteSection
 * Variation: Single
 *
 */

import React from 'react'
import { getSinglePadding } from '../../styles/global-padding'
import { heading2Style, heading3Style } from '../../styles/heading'
import { paragraphStyle } from '../../styles/paragraph'
import { AvatarImageBox } from '../../views/avatar-image-box/avatar-image-box'
import { Box, Flex } from '../../views/core-elements/grid'
import { H2, H3 } from '../../views/core-elements/heading'
import { Paragraph } from '../../views/core-elements/paragraph'
import { QuoteSectionProps } from './quote-section'

export const QuoteSectionSingleVar = (props: QuoteSectionProps) => {
  const imageSizes = ['100px', '150px', '170px', '200px']
  return (
    <Flex
      ncss={{
        px: getSinglePadding('section', 'left'),
        w: 1,
        color: 'text',
        bg: 'bg',
      }}
    >
      <Box ncss={{ w: imageSizes, h: imageSizes }}>
        <AvatarImageBox image={props.image} />
      </Box>
      <Box
        ncss={{
          pl: getSinglePadding('textBox', 'left'),
          w: 2 / 3,
        }}
      >
        <H2 ncss={{ ...heading2Style }}>{props.heading}</H2>
        <H3 ncss={{ ...heading3Style }}>{props.subHeading}</H3>
        <Paragraph ncss={{ ...paragraphStyle }}>
          &quot;{props.abstract.abstract}...&quot;
        </Paragraph>
      </Box>
    </Flex>
  )
}
