import React from 'react'
import { Box, Flex } from '../core/elements/grid'
import { PageSectionProps } from '../components/page-section/page-section'
import { getPageSectionInfo } from './get-page-section-info'
import { SvgBell } from '../svg/feather'

const yesNo = (value: boolean) => {
  return value ? 'yes' : 'no'
}

export const NotImplemented = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  return (
    <Flex ncss={{ fontFamily: 'text', p: 3 }}>
      <Flex ncss={{ bg: '#ccc', p: 3, w: 1, alignItems: 'center' }}>
        <SvgBell strokeWidth={2} ncss={{ color: 'text', mr: 2, w: [1 / 30] }} />
        Variation not implemented: {props.variation}
      </Flex>
      <Box ncss={{ bg: '#eee', p: 3, w: 1 }}>
        index: {info.index}
        <br />
        hasAction: {yesNo(info.hasAction)}
        <br />
        actionCount: {info.actionCount}
        <br />
        hasNavigation: {yesNo(info.hasNavigation)}
        <br />
        navigationSegmentCount: {info.navigationSegmentCount}
        <br />
        path: {info.path}
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
