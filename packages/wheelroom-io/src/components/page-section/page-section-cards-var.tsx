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
import { NotImplemented } from '../../lib/not-implemented'

export const PageSectionCardsVar = (props: PageSectionProps) => {
  if (props.topics) {
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
            {cards}
          </Container>
        </Box>
      </Fragment>
    )
  } else return <NotImplemented {...props} />
}
