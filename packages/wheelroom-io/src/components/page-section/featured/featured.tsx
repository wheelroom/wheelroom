import React, { Fragment } from 'react'
import { FeaturedItem } from './featured-item'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'

export interface FeaturedProps {
  topics: TopicProps[]
}

export const Featured = (props: FeaturedProps) => {
  const featured = props.topics.map((topic, index) => (
    <FeaturedItem key={index} topic={topic} />
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
          {featured}
        </Container>
      </Box>
    </Fragment>
  )
}
