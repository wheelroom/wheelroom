import React, { Fragment } from 'react'
import { Box } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { Paragraph } from '../../../core/elements/paragraph'
import { H2 } from '../../../core/elements/heading'
import { Image } from '../../../core/elements/image'
import { Action } from '../../action'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { heading2Style } from '../../../core/styles/heading'

export interface FeaturedProps {
  topic?: TopicProps
}

export const SinlgeFeatured = (props: FeaturedProps) => {
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Featured',
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Box
          ncss={{
            label: 'Featured-Image',
            display: 'flex',
            flexDirection: 'column',
            w: [1, 1, 1 / 2.5],
            mb: [3, 3, 0],
          }}
        >
          <Image image={props.topic?.image} objectFit="cover" />
        </Box>
        <Box
          ncss={{
            label: 'Featured-Copy',
            display: 'flex',
            flexDirection: 'column',
            w: [1, 1, 1 / 2.5],
          }}
        >
          <Box
            is="header"
            ncss={{
              label: 'Copy',
              mx: 3,
            }}
          >
            <H2
              ncss={{
                ...heading2Style,
              }}
            >
              {props.topic?.heading}
            </H2>
            <Paragraph
              ncss={{
                color: 'text',
              }}
            >
              {props.topic?.abstract.abstract}
            </Paragraph>
          </Box>
          <Box
            is="div"
            ncss={{
              label: 'Cta',
              display: 'flex',
              mx: 3,
            }}
          >
            <Action
              url={props.topic?.actions[0].url}
              heading={props.topic?.actions[0].heading}
              title={props.topic?.actions[0].title}
              ncss={{
                ...buttonPrimaryStyle,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}
