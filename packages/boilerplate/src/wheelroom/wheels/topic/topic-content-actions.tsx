import React from 'react'
import { ActionProps } from '../../../models/action'
import { Box } from '../elements/grid'
import { Any } from '../elements/any'
import { TopicProps } from '../../../models/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Action } from '../action/action'
import { Wheel } from '../types'

export interface TopicContentActionsProps {
  /** Styling wheel */
  wheel: Wheel
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

export const TopicContentActions = (props: TopicContentActionsProps) => {
  if (!props.topicInfo.hasAction && !props.pageSectionActions) {
    return null
  }
  const actions = props.pageSectionActions || props.topic.actions
  /** Support only one action for now */
  const action = actions[0]

  const treeStyle = props.treeStyle || {}
  const ncssStyle = treeStyle.ncss || {}
  const linkStyle = treeStyle.link || {}

  return (
    <Box is="div" ncss={ncssStyle}>
      {props.fullTopicAsLink ? (
        <Any is="span" ncss={linkStyle.ncss}>
          {action.heading}
        </Any>
      ) : (
        <Action {...action} treeStyle={linkStyle.ncss}>
          {action.heading}
        </Action>
      )}
    </Box>
  )
}
