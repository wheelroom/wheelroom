/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: homeOpener
 *
 */

import React from 'react'
import { heading1Style } from '../../styles/heading'
import { paragraphStyle } from '../../styles/paragraph'
import { Box, Container, Flex } from '../../views/core-elements/grid'
import { Heading } from '../../views/core-elements/heading'
import { Text } from '../../views/core-elements/text'
import { Image } from '../../views/image/image'
import { OpenerSectionProps } from './opener-section'

export const OpenerSectionHomeOpenerVar = (props: OpenerSectionProps) => {
  return (
    <Container>
      <Flex>
        <Box ncss={{ w: [1, 1 / 2], bg: 'blue', p: 10 }}>
          <Heading ncss={heading1Style}>{props.page.pageHeading}</Heading>
          <Text ncss={paragraphStyle}>
            {props.page.pageInfoText.pageInfoText}
          </Text>
        </Box>
        <Box ncss={{ w: [1, 1 / 2], bg: 'orange', p: 0 }}>
          <Image image={props.image} />
        </Box>
      </Flex>
      <Flex ncss={{ bg: 'orange', w: 1, p: 5 }}>Something</Flex>
    </Container>
  )
}
