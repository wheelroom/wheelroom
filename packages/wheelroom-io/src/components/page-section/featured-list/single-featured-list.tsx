import React, { Fragment } from 'react'
import { Box } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { Paragraph } from '../../../core/elements/paragraph'
import { H3 } from '../../../core/elements/heading'
import { Image } from '../../../core/elements/image'
import { Action } from '../../action'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { heading3Style } from '../../../core/styles/heading'

export interface FeaturedListProps {
  topic?: TopicProps
}

export const SingleFeaturedList = (props: FeaturedListProps) => {
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Featured-List',
          display: 'flex',
          flexDirection: ['column', 'row'],
        }}
      >
        <Box
          ncss={{
            label: 'Featured-List-Image',
            display: 'flex',
            flexDirection: 'column',
            w: [1 / 3, 1 / 3, 1 / 4],
            p: 3,
          }}
        >
          <Image image={props.topic?.image} objectFit="cover" />
        </Box>
        <Box
          ncss={{
            label: 'Featured-List-Copy',
            display: 'flex',
            flexDirection: 'column',
            w: [1, 2 / 3, 3 / 4],
            p: 3,
          }}
        >
          <Box
            is="header"
            ncss={{
              label: 'Copy',
            }}
          >
            <H3
              ncss={{
                ...heading3Style,
              }}
            >
              {props.topic?.heading}
            </H3>
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
