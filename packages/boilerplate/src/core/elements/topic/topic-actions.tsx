import React from 'react'
import { Action, ActionProps } from '../../../components/action'
import { buttonPrimaryStyle } from '../../styles/button'
import { Box } from '../primary/grid'
import { Any } from '../primary/any'
import { NcssProps } from '../primary/types'
import { TopicProps } from '../../../components/topic'
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
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicActions = (props: TopicActionProps) => {
  if (!props.topicInfo.hasAction && !props.pageSectionActions) {
    return null
  }
  const actions = props.pageSectionActions || props.topic.actions
  // Support only one action for now
  const action = actions[0]

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
          styleTree={{
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
