/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Cards
 *
 */

import React, { Fragment } from 'react'
import { PageSectionProps } from './page-section'
import { Cards } from './cards/cards'
import { Box, Container } from '../../core/elements/grid'

export const PageSectionCardsVar = (props: PageSectionProps) => {
  const cards = props.topics.map((topic, index) => (
    <Cards key={index} topic={topic} />
  ))
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Wrapper',
          bg: 'bg',
        }}
      >
        <Container
          ncss={{
            label: 'Container',
            maxWidth: '1280px',
            m: 'auto',
            px: [2, 5, 7],
            w: 1,
          }}
        >
          {cards}
        </Container>
      </Box>
    </Fragment>
  )
}
