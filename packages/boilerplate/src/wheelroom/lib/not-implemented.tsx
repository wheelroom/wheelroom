import React from 'react'
import { Box, Flex } from '../wheels/element/grid'
import { PageSectionProps } from '../../models/page-section/page-section'
import { getPageSectionInfo } from './get-page-section-info'
import { SvgBell } from '../svg/feather'
import { Wheel } from '../wheels/types'

const yesNo = (value: boolean) => {
  return value ? 'yes' : 'no'
}

export const NotImplemented = (props: {
  pageSection: PageSectionProps
  wheel: Wheel
}) => {
  const info = getPageSectionInfo(props.pageSection)
  return (
    <Flex ncss={{ fontFamily: 'text', p: 3 }} wheel={props.wheel}>
      <Flex ncss={{ bg: '#ccc', p: 3, w: 1 }} wheel={props.wheel}>
        <SvgBell
          strokeWidth={2}
          ncss={{ color: 'black', mr: 2, w: [1 / 30] }}
          wheel={props.wheel}
        />
        Variation not implemented: {props.pageSection.variation}
      </Flex>
      <Box ncss={{ bg: '#eee', p: 3, w: 1 }} wheel={props.wheel}>
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
