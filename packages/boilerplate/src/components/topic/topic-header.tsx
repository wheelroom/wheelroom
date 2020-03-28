import React from 'react'
import { TopicProps } from './topic'
import { Box } from '../../core/elements/grid'
import { Paragraph } from '../../core/elements/paragraph'
import { IconMap } from '../../svg/feather/iconMap'
import { BlockLevelElementName, NcssProps } from '../../core/elements/types'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Heading } from '../../core/elements/heading'

const defaultIconStyle = {
  width: '40px',
  height: '40px',
  color: 'svgStroke',
  strokeWidth: '1px',
  mb: 2,
}

const defaultWrapperStyle = {
  label: 'topic-header',
}

export interface TopicHeaderProps {
  /** Override default styling of the wrapper */
  headerWrapperStyle?: NcssProps
  /** Defaults to h3 */
  useHeading?: BlockLevelElementName
  /** Defaults to p */
  useParagraph?: BlockLevelElementName
  /** Override default paragraph style */
  paragraphStyle?: NcssProps
  /** Override default heading style */
  headingStyle?: NcssProps
  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

const Icon = (props: { name: string }) => {
  if (props.name && props.name in IconMap) {
    const RenderIcon = IconMap[props.name]
    return <RenderIcon ncss={{ ...defaultIconStyle }} />
  }
  return null
}

export const TopicHeader = (props: TopicHeaderProps) => {
  const useHeading = props.useHeading || 'h3'
  const useParagraph = props.useParagraph || 'p'

  const headerWrapperStyle = props.headerWrapperStyle || {}
  const paragraphStyle = props.paragraphStyle || {}
  const headingStyle = props.headingStyle || {}

  const topicOptions = props.pageSectionInfo.topicOptions

  return (
    <Box is="header" ncss={{ ...defaultWrapperStyle, ...headerWrapperStyle }}>
      {!topicOptions.hideIcon && <Icon name={props.topic.icon} />}
      {!topicOptions.hideHeading && (
        <Heading is={useHeading} ncss={{ ...headingStyle }}>
          {props.topic.heading}
        </Heading>
      )}
      {!topicOptions.hideAbstract && (
        <Paragraph is={useParagraph} ncss={{ ...paragraphStyle }}>
          {props.topic.abstract &&
            props.topic.abstract.abstract
              .split('\n')
              .reduce((children: any, textSegment, index) => {
                return [
                  ...children,
                  index > 0 && <br key={index} />,
                  textSegment,
                ]
              }, [])}
        </Paragraph>
      )}
    </Box>
  )
}
