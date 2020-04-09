import React from 'react'
import { TopicProps } from '../../../models/topic/topic'
import { Box } from '../../elements/grid'
import { BlockLevelElementName } from '../../elements/types'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Heading } from '../../elements/heading'
import { TopicIcon } from './topic-icon'
import { ParserFunction } from '../../parsers/types'
import { Paragraph } from '../../elements/paragraph'
import { TopicContentTextTreeStyle } from './topic-content-text-style'

export interface TopicContentTextProps {
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Defaults to h3 */
  useHeadingParser?: ParserFunction
  /** Defaults to p */
  useAbstractParser?: ParserFunction

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo

  treeStyle?: TopicContentTextTreeStyle
}

export const TopicContentText = (props: TopicContentTextProps) => {
  const treeStyle = props.treeStyle || {}
  const nodeStyle = treeStyle.ncss || {}
  const abstractStyle = treeStyle.abstract || {}
  const headingStyle = treeStyle.heading || {}
  const topicOptions = props.pageSectionInfo.topicOptions

  const useHeadingElement = props.useHeadingElement || 'h3'
  const useAbstractElement = props.useAbstractElement || 'p'

  const HeadingParser = props.useHeadingParser || Heading
  const AbstractParser = props.useAbstractParser || Paragraph

  return (
    <Box is="header" ncss={nodeStyle}>
      {!topicOptions.hideIcon && <TopicIcon icon={props.topic.icon} />}
      {!topicOptions.hideHeading && (
        <HeadingParser is={useHeadingElement} ncss={headingStyle}>
          {props.topic.heading}
        </HeadingParser>
      )}
      {!topicOptions.hideAbstract &&
        props.topic.abstract &&
        props.topic.abstract.abstract && (
          <AbstractParser is={useAbstractElement} ncss={abstractStyle}>
            {props.topic.abstract.abstract}
          </AbstractParser>
        )}
    </Box>
  )
}
