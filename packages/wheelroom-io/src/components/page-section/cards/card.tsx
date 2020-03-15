import React, { Fragment } from 'react'
import { Box, Flex } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { Paragraph } from '../../../core/elements/paragraph'
import { H3 } from '../../../core/elements/heading'
import { Image } from '../../../core/elements/image'
import { Action } from '../../action/action'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { heading3Style } from '../../../core/styles/heading'

export interface CardProps {
  topic?: TopicProps
}

export const Card = (props: CardProps) => {
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'Card',
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          bg: 'bg',
          boxShadow: '0 0 16px',
          color: 'cardsShadow',
          border: '1px solid',
          borderColor: 'borderShadow',
          borderRadius: 3,
          maxWidth: '285px',
          m: 2,
          transition: 'transform .25s ease',
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)',
          },
        }}
      >
        <Image
          image={props.topic?.image}
          objectFit="cover"
          height="184px"
          margin="16px"
        />
        <Box
          is="header"
          ncss={{
            label: 'Copy',
            flex: '1 1 auto',
            mx: 3,
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
        <Flex
          is="div"
          ncss={{
            label: 'Cta',
            mx: 3,
            mb: 3,
            flex: '0 1 auto',
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
        </Flex>
      </Box>
    </Fragment>
  )
}
