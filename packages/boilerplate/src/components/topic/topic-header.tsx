import React from 'react'
import { TopicProps } from './topic'
import { Box } from '../../core/elements/grid'
import { HeadingName, HeadingMap } from '../../core/elements/heading'
import { headingStyleMap } from '../../core/styles/heading'
import { Paragraph } from '../../core/elements/paragraph'
import { IconMap } from '../../svg/feather/iconMap'
import { NcssProps } from '../../core/elements/types'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'

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
  useHeading?: HeadingName
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

  const headerWrapperStyle = props.headerWrapperStyle || {}
  const paragraphStyle = props.paragraphStyle || {}
  const defaultHeadingStyle = headingStyleMap[useHeading]
  const headingStyle = props.headingStyle || {}

  const Heading = HeadingMap[useHeading]
  const topicOptions = props.pageSectionInfo.topicOptions

  return (
    <Box is="header" ncss={{ ...defaultWrapperStyle, ...headerWrapperStyle }}>
      {!topicOptions.hideIcon && <Icon name={props.topic.icon} />}
      {!topicOptions.hideHeading && (
        <Heading ncss={{ ...defaultHeadingStyle, ...headingStyle }}>
          {props.topic.heading}
        </Heading>
      )}
      {!topicOptions.hideAbstract && (
        <Paragraph ncss={{ ...paragraphStyle }}>
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
