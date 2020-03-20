import React from 'react'
import { TopicProps } from './topic'
import { Box } from '../../core/elements/grid'
import { H3, H1, H2, H4, H5, H6 } from '../../core/elements/heading'
import {
  heading3Style,
  heading1Style,
  heading2Style,
  heading4Style,
  heading5Style,
  heading6Style,
} from '../../core/styles/heading'
import { Paragraph } from '../../core/elements/paragraph'
import { TopicOptions } from '../page-section/get-topic-options'
import { IconMap } from '../../svg/feather/iconMap'

const defaultIconStyle = {
  width: '40px',
  height: '40px',
  color: 'svgStroke',
  strokeWidth: '1px',
  mb: 2,
}

const headingStyleMap = {
  h1: heading1Style,
  h2: heading2Style,
  h3: heading3Style,
  h4: heading4Style,
  h5: heading5Style,
  h6: heading6Style,
}

const HeadingMap = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}

const defaultWrapperStyle = {
  label: 'topic-header',
}

const defaultParagraphStyle = {
  color: 'text',
}

export interface TopicHeaderProps {
  /** The action to show */
  topic: TopicProps
  /** Override default styling of the wrapper */
  headerWrapperStyle?: any
  /** Defaults to h3 */
  useHeading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Override default paragraph style */
  paragraphStyle?: any
  /** Override default heading style */
  headingStyle?: any
  /** Topic options */
  options: TopicOptions
}

const Icon = (props: { name: string }) => {
  if (props.name && props.name in IconMap) {
    const RenderIcon = IconMap[props.name]
    return <RenderIcon ncss={{ ...defaultIconStyle }} />
  }
  return null
}

export const TopicHeader = (props: TopicHeaderProps) => {
  const headerWrapperStyle = props.headerWrapperStyle || {}
  const paragraphStyle = props.paragraphStyle || {}
  const useHeading = props.useHeading || 'h3'
  const Heading = HeadingMap[useHeading]
  const defaultHeadingStyle = headingStyleMap[useHeading]
  const headingStyle = props.headingStyle || {}

  if (props.options.hideHeading && props.options.hideAbstract) {
    return null
  }
  return (
    <Box is="header" ncss={{ ...defaultWrapperStyle, ...headerWrapperStyle }}>
      {!props.options.hideIcon && <Icon name={props.topic.icon} />}
      {!props.options.hideHeading && (
        <Heading ncss={{ ...defaultHeadingStyle, ...headingStyle }}>
          {props.topic.heading}
        </Heading>
      )}
      {!props.options.hideAbstract && (
        <Paragraph ncss={{ ...defaultParagraphStyle, ...paragraphStyle }}>
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
