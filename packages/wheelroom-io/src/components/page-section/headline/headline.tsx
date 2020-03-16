import React, { Fragment } from 'react'
import { Box, Container, Flex } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { Paragraph } from '../../../core/elements/paragraph'
import { H1 } from '../../../core/elements/heading'
import { Image } from '../../../core/elements/image'
import { Action } from '../../action'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { heading1Style } from '../../../core/styles/heading'
import { TextProps, Text } from '../../text/text'
import { PageSectionInfo } from '../../../lib/get-page-section-info'

export interface HeadlineProps {
  info: PageSectionInfo
  locale: string
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
          bg: 'bg',
          py: 8,
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
          <Box
            is="div"
            ncss={{
              label: 'Headline',
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              w: 1,
              textAlign: 'center',
            }}
          >
            {props.info.hasTopic && props.topic?.image && (
              <Image image={props.topic.image} objectFit="cover" mb="32px" />
            )}
            {props.info.hasText ? (
              <Text {...props.text!} locale={props.locale} />
            ) : (
              <HeadlineTopic topic={props.topic!} />
            )}
          </Box>
        </Container>
      </Box>
    </Fragment>
  )
}

export interface HeadlineTopicProps {
  topic: TopicProps
}

export const HeadlineTopic = (props: HeadlineTopicProps) => {
  return (
    <Fragment>
      <Box
        is="header"
        ncss={{
          label: 'Copy',
          flex: '1 1 auto',
        }}
      >
        <H1
          ncss={{
            ...heading1Style,
          }}
        >
          {props.topic.heading}
        </H1>
        <Paragraph
          ncss={{
            color: 'text',
            fontSize: [5, 6],
            lineHeight: [3, 4],
          }}
        >
          {props.topic.abstract && props.topic.abstract.abstract}
        </Paragraph>
      </Box>
      <Flex
        is="div"
        ncss={{
          label: 'Cta',
          mx: 'auto',
          flex: '0 1 auto',
        }}
      >
        <Action
          url={props.topic.actions[0].url}
          heading={props.topic.actions[0].heading}
          title={props.topic.actions[0].title}
          ncss={{
            ...buttonPrimaryStyle,
            mx: 2,
            fontSize: [5, 6],
            lineHeight: [3, 4],
          }}
        />
      </Flex>
    </Fragment>
  )
}
