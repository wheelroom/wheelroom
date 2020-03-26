import React from 'react'
import { Box } from '../../core/elements/grid'
import { NcssProps } from '../../core/elements/types'
import { TopicProps } from '.'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'

/** This style needs cleaning up, only default values here */
const defaultWrapperStyle = {
  label: 'topic-content',
  justifyContent: 'center',
  p: 3,
}

const overrideContentStyle = {
  w: 1,
}

export interface TopicContentWrapperProps {
  children: any
  /** Override default wrapper styling */
  contentWrapperStyle?: NcssProps
  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
  /** Reverse image and content */
  reverse?: boolean
}

export const TopicContentWrapper = (props: TopicContentWrapperProps) => {
  const order = props.reverse ? -1 : null
  const topicOptions = props.pageSectionInfo.topicOptions
  const contentWrapperStyle = props.contentWrapperStyle || {}
  return (
    <Box
      ncss={{
        order,
        ...defaultWrapperStyle,
        ...(topicOptions.hideMedia
          ? { ...overrideContentStyle }
          : contentWrapperStyle),
      }}
    >
      {props.children}
    </Box>
  )
}
