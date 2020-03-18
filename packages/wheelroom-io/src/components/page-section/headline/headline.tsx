import React, { Fragment } from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { TextProps } from '../../text/text'
import { PageSectionInfo } from '../../../lib/get-page-section-info'

export interface HeadlineProps {
  info: PageSectionInfo
  text?: TextProps
  topic?: TopicProps
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

// TODO: Pass text to topic once topic has this implemented
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
          label: 'Wrapper',
        }}
      >
        <Container
          ncss={{
            label: 'Container',
            maxWidth: '1280px',
            m: 'auto',
            px: [2, 5, 7],
            w: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.topic && (
            <Topic
              {...props.topic}
              topicWrapperStyle={{
                flex: '1',
                w: 1,
                textAlign: 'center',
              }}
              imageProps={{
                mb: '32px',
              }}
              contentWrapperStyle={{
                flex: '1 1 auto',
              }}
              useHeading="h1"
              paragraphStyle={{
                fontSize: [5, 6],
                lineHeight: [3, 4],
              }}
              actionWrapperStyle={{
                mx: 'auto',
                flex: '0 1 auto',
              }}
              actionStyle={{
                mx: 2,
                fontSize: [5, 6],
                lineHeight: [3, 4],
              }}
            />
          )}
        </Container>
      </Box>
    </Fragment>
  )
}
