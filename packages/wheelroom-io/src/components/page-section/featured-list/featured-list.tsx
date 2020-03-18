import React, { Fragment } from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'

export interface FeaturedListProps {
  info: PageSectionInfo
  topics: TopicProps[]
}

/**
 *
 * Requires one or more topics.
 *
 * The topics are displayed as featured items below each other.
 *
 */

export const FeaturedList = (props: FeaturedListProps) => {
  // Featured List needs topics or text, return null (render nothing) otherwise
  if (!(props.info.hasTopic || props.info.hasText)) {
    return null
  }
  const featuredList = props.topics.map((topic, index) => (
    <Topic
      key={index}
      {...topic}
      topicWrapperStyle={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}
      imageWrapperStyle={{
        display: 'flex',
        flexDirection: 'column',
        w: [1 / 3, 1 / 3, 1 / 4],
        p: 3,
      }}
      contentWrapperStyle={{
        display: 'flex',
        flexDirection: 'column',
        w: [1, 2 / 3, 3 / 4],
        p: 3,
      }}
      paragraphStyle={{
        color: 'text',
      }}
      actionWrapperStyle={{
        display: 'flex',
      }}
    />
  ))
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
            justifyContent: 'center',
            px: [2, 5, 7],
            w: 1,
            flexDirection: ['column'],
            alignItems: ['center', 'initial'],
          }}
        >
          {featuredList}
        </Container>
      </Box>
    </Fragment>
  )
}
