import React from 'react'
import { Action } from '../action'
import { buttonPrimaryStyle } from '../../core/styles/button'
import { Box } from '../../core/elements/grid'
import { Any } from '../../core/elements/any'
import { NcssProps } from '../../core/elements/types'
import { TopicProps } from '.'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'

const defaultWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  label: 'topic-action',
}

export interface TopicActionProps {
  /** Override default styling of the wrapper */
  actionWrapperStyle?: NcssProps
  /** Override default button style */
  actionStyle?: NcssProps
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicActions = (props: TopicActionProps) => {
  if (!props.topicInfo.hasAction) {
    return null
  }
  // Support only one action for now
  const action = props.topic.actions[0]

  const actionWrapperStyle = props.actionWrapperStyle || {}
  const actionStyle = props.actionStyle || {}
  return (
    <Box ncss={{ ...defaultWrapperStyle, ...actionWrapperStyle }}>
      {props.fullTopicAsLink ? (
        <Any
          is="span"
          ncss={{
            ...buttonPrimaryStyle,
            ...actionStyle,
          }}
        >
          {action.heading}
        </Any>
      ) : (
        <Action
          {...action}
          ncss={{
            ...buttonPrimaryStyle,
            ...actionStyle,
          }}
        >
          {action.heading}
        </Action>
      )}
    </Box>
  )
}
