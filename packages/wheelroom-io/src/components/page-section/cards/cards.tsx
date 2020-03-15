import React, { Fragment } from 'react'
import { Card } from './card'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'

export interface CardsProps {
  topics: TopicProps[]
}

export const Cards = (props: CardsProps) => {
  const card = props.topics.map((topic, index) => (
    <Card key={index} topic={topic} />
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
          }}
        >
          {card}
        </Container>
      </Box>
    </Fragment>
  )
}
