/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Cards
 *
 */

import React, { Fragment } from 'react'
import { Box, Container } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { TextProps } from '../../text'
import { ActionProps } from '../../action'
import { Paragraph } from '../../../core/elements/paragraph'
import { H3 } from '../../../core/elements/heading'

export interface CardsProps {
  text?: TextProps
  topic?: TopicProps
  action?: ActionProps
}

export const Cards = (props: CardsProps) => {
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Cards',
        }}
      >
        <H3>{props.topic?.heading}</H3>
        <Paragraph
          ncss={{
            color: 'text',
          }}
        >
          {props.topic?.abstract.abstract}
        </Paragraph>
      </Box>
    </Fragment>
  )
}
