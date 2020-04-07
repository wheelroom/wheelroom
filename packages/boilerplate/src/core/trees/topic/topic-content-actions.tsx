import React from 'react'
import { ActionProps } from '../../../models/action'
import { buttonPrimaryStyle } from '../../../element-styles/button'
import { Box } from '../../elements/grid'
import { Any } from '../../elements/any'
import { TopicProps } from '../../../models/topic'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { NcssProps } from '../../elements/types'
import { ActionTree } from '../action/action-tree'

export interface TopicActionsTreeStyle {
  /** Wrapper around action */
  wrapper?: NcssProps
  /** Action link or button style */
  link?: NcssProps
}

export interface TopicContentActionsProps {
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

  treeStyle?: TopicActionsTreeStyle
}

export const TopicContentActions = (props: TopicContentActionsProps) => {
  if (!props.topicInfo.hasAction && !props.pageSectionActions) {
    return null
  }
  const actions = props.pageSectionActions || props.topic.actions
  // Support only one action for now
  const action = actions[0]

  const treeStyle = props.treeStyle || {}
  const wrapperStyle = treeStyle.wrapper || {}
  const linkStyle = treeStyle.link || {}

  return (
    <Box
      ncss={{
        display: 'flex',
        flexDirection: 'row',
        label: 'topic-action',
        ...wrapperStyle,
      }}
    >
      {props.fullTopicAsLink ? (
        <Any
          is="span"
          ncss={{
            ...buttonPrimaryStyle,
            ...linkStyle,
          }}
        >
          {action.heading}
        </Any>
      ) : (
        <ActionTree
          {...action}
          treeStyle={{
            ...buttonPrimaryStyle,
            ...linkStyle,
          }}
        >
          {action.heading}
        </ActionTree>
      )}
    </Box>
  )
}
