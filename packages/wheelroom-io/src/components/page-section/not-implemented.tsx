/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Medium
 *
 */

import React from 'react'
import { Box, Flex } from '../../views/core-elements/grid'
import { PageSectionProps } from './page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'

const yesNo = (value: boolean) => {
  return value ? 'yes' : 'no'
}

export const NotImplemented = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  return (
    <Flex ncss={{ fontFamily: 'text', p: 3 }}>
      <Box ncss={{ bg: '#ccc', p: 3, w: 1 }}>
        Variation not implemented: {props.variation}
      </Box>
      <Box ncss={{ bg: '#eee', p: 3, w: 1 }}>
        hasNavigation: {yesNo(info.hasNavigation)}
        <br />
        hasText: {yesNo(info.hasText)}
        <br />
        hasTopic: {yesNo(info.hasTopic)}
        <br />
        topicCount: {info.topicCount}
      </Box>
    </Flex>
  )
}
