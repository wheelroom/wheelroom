import React, { Fragment } from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'

export interface CardsProps {
  topics: TopicProps[]
}

/**
 *
 * Accepts one or more cards
 *
 */

export const Cards = (props: CardsProps) => {
  const cards = props.topics.map((topic, index) => (
    <Topic key={index} {...topic} />
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
            flexWrap: 'wrap',
          }}
        >
          {cards}
        </Container>
      </Box>
    </Fragment>
  )
}
