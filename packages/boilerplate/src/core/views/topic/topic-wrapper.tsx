import React from 'react'
import { Box } from '../../primary-elements/grid'
import { Action } from '../../../components/action/action'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { TopicProps } from '../../../components/topic/topic'
import { NcssProps } from '../../primary-elements/types'

const defaultWrapperStyle = {
  label: 'topic',
  display: 'flex',
  flexDirection: 'column',
}

export interface TopicWrapperProps {
  children: any
  /** Override default wrapper styling */
  topicWrapperStyle?: NcssProps
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicWrapper = (props: TopicWrapperProps) => {
  const topicWrapperStyle = props.topicWrapperStyle || {}
  const fullTopicAsLink = props.topicInfo.hasAction && props.fullTopicAsLink
  return fullTopicAsLink ? (
    <Action
      {...props.topic.actions[0]}
      styleTree={{
        ...defaultWrapperStyle,
        ...topicWrapperStyle,
        textDecoration: 'none',
      }}
    >
      {props.children}
    </Action>
  ) : (
    <Box
      ncss={{
        ...defaultWrapperStyle,
        ...topicWrapperStyle,
      }}
    >
      {props.children}
    </Box>
  )
}
