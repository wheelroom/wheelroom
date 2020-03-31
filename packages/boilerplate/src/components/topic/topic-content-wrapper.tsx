import React from 'react'
import { Box } from '../../core/elements/primary/grid'
import { NcssProps } from '../../core/elements/primary/types'
import { TopicProps } from '.'
import { TopicInfo } from '../../core/lib/get-topic-info'
import { PageSectionInfo } from '../../core/lib/get-page-section-info'

/** This style needs cleaning up, only default values here */
const defaultWrapperStyle = {
  label: 'topic-content',
  justifyContent: 'center',
  p: 3,
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
  const contentWrapperStyle = props.contentWrapperStyle || {}
  return (
    <Box
      ncss={{
        order,
        ...defaultWrapperStyle,
        ...contentWrapperStyle,
      }}
    >
      {props.children}
    </Box>
  )
}
