import React from 'react'
import {
  Any,
  BlockLevelElementName,
  Box,
  Icon,
  ParserFunction,
  Wheel,
} from '@wheelroom/core'
import { TopicInfo } from '../../lib/get-topic-info'
import { TopicOptions } from '../../lib/get-topic-options'
import { TopicModel } from './model'
import { TopicNcssTree } from './ncss-tree'
import { TopicData } from './data'

export interface TopicContentTextWheel extends Wheel {
  style: TopicNcssTree
}

export interface TopicContentTextProps {
  /** Styling wheel */
  wheel: TopicContentTextWheel
  /** Data wheel */
  data: TopicData
  /** Use this element instead of the Icon element. NOTE: This is an element, not a string */
  useIconElement?: JSX.Element | undefined
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Defaults to h3 */
  useHeadingParser?: ParserFunction
  /** Defaults to p */
  useAbstractParser?: ParserFunction
  /** All topic props */
  topic: TopicModel
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  topicOptions: TopicOptions
}

export const TopicContentText = (props: TopicContentTextProps) => {
  if (props.data.hideText) {
    return null
  }
  const topicOptions = props.topicOptions

  const useAbstractElement = props.useAbstractElement || 'p'
  const useHeadingElement = props.useHeadingElement || 'h3'

  const AbstractParser =
    props.useAbstractParser || props.data.useAbstractParser || Any
  const HeadingParser =
    props.useHeadingParser || props.data.useHeadingParser || Any

  return (
    <Box is="div" wheel={{ ...props.wheel, style: props.wheel.style.text }}>
      {!topicOptions.hideIcon &&
        props.topic.icon &&
        !props.data.hideIcon &&
        (props.useIconElement ? (
          props.useIconElement
        ) : (
          <Icon
            customIconMap={props.data.customIconMap}
            icon={props.topic.icon || ''}
            wheel={{ ...props.wheel, style: props.wheel.style.icon }}
          />
        ))}
      {!topicOptions.hideHeading &&
        props.topic.heading &&
        !props.data.hideHeading && (
          <HeadingParser
            polyPreset={true}
            is={useHeadingElement}
            wheel={{ ...props.wheel, style: props.wheel.style.heading }}
          >
            {props.topic.heading}
          </HeadingParser>
        )}
      {!topicOptions.hideAbstract &&
        props.topic.abstract &&
        props.topic.abstract.abstract &&
        !props.data.hideAbstract && (
          <AbstractParser
            polyPreset={true}
            is={useAbstractElement}
            wheel={{ ...props.wheel, style: props.wheel.style.abstract }}
          >
            {props.topic.abstract.abstract}
          </AbstractParser>
        )}
    </Box>
  )
}
