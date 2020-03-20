import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { TextProps } from '../../text/text'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TopicOption } from '../page-section'

export interface HeadlineProps {
  info: PageSectionInfo
  text?: TextProps
  topic?: TopicProps
  topicOptions: TopicOption[]
}

/**
 *
 * Requires one topic or a text.
 *
 * - Only a topic: the topic is displayed
 * - Only a text: the text is displayed
 * - Topic and text: the topic image is displayed with the text
 *
 */

export const Headline = (props: HeadlineProps) => {
  // Headline needs topic or text, return null (render nothing) otherwise
  if (!(props.info.hasTopic || props.info.hasText)) {
    return null
  }
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'wrapper',
          bg: 'bg',
          py: 8,
        }}
      >
        <ContainerMaxWidth>
          {props.topic && (
            <Topic
              {...props.topic}
              topicOptions={props.topicOptions}
              text={props.text}
              topicWrapperStyle={{
                w: 1,
              }}
              // TODO: @jacco – imageProps doesn't work and isn't applied on the image
              imageProps={{
                mb: '32px',
              }}
              contentWrapperStyle={{
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'column',
                justifyContent: 'column',
              }}
              useHeading="h1"
              paragraphStyle={{
                fontSize: [5, 6],
                lineHeight: [3, 4],
              }}
              actionWrapperStyle={{
                mx: 'auto',
              }}
              actionStyle={{
                mx: 2,
                fontSize: [5, 6],
                lineHeight: [3, 4],
              }}
            />
          )}
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}
