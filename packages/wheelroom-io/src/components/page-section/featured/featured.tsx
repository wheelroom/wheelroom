import React, { Fragment } from 'react'
import { SingleFeatured } from './single-featured'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TextProps } from '../../text'

export interface FeaturedProps {
  info: PageSectionInfo
  locale: string
  text?: TextProps
  topics: TopicProps[]
}

/**
 *
 * Requires one or more topics, optional a text.
 *
 * - One topic: the topic is displayed
 * - Two topics: the image of the first topic is displayed, the two topics ared
 *   shown next to the image
 * - Four topics: the image of the first topic is displayed, the four topics
 *   ared shown next to the image
 * - Topic and text: The image of the first topic is displayed, the text shows
 *   next to the image
 *
 */

export const Featured = (props: FeaturedProps) => {
  // Headline needs topics or text, return null (render nothing) otherwise
  if (!(props.info.hasTopic || props.info.hasText)) {
    return null
  }
  const featuredList = props.topics.map((topic, index) => (
    <SingleFeatured key={index} topic={topic} />
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
            flexDirection: ['column', 'row'],
            alignItems: ['center', 'initial'],
          }}
        >
          {featuredList}
        </Container>
      </Box>
    </Fragment>
  )
}
