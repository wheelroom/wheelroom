/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Home opener
 *
 */

import React from 'react'

import { Box, Flex } from '../../views/core-elements/grid'
import { OpenerSectionProps } from './opener-section'

export const OpenerSectionHomeOpenerVar = (props: OpenerSectionProps) => {
  return (
    <Flex>
      <h2>OpenerSectionHomeOpenerVar</h2>
      <Flex ncss={{ bg: 'blue' }}>
        <Box ncss={{ w: [1, 1 / 2] }}>Heading</Box>
        <Box ncss={{ w: [1, 1 / 2] }}>{props.heading}</Box>
      </Flex>
    </Flex>
  )
}
