import React, { Fragment } from 'react'
import { Box, Container, Flex } from '../../../core/elements/grid'
import { TopicProps } from '../../topic'
import { Paragraph } from '../../../core/elements/paragraph'
import { H1 } from '../../../core/elements/heading'
import { Image } from '../../../core/elements/image'
import { Action } from '../../action'
import { buttonPrimaryStyle } from '../../../core/styles/button'
import { heading1Style } from '../../../core/styles/heading'

export interface HeadlineProps {
  topic?: TopicProps
}

export const Headline = (props: HeadlineProps) => {
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
            px: [2, 5, 7],
            w: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            is="div"
            ncss={{
              label: 'Headline',
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              w: 1,
              textAlign: 'center',
            }}
          >
            <Image image={props.topic?.image} objectFit="cover" mb="32px" />
            <Box
              is="header"
              ncss={{
                label: 'Copy',
                flex: '1 1 auto',
              }}
            >
              <H1
                ncss={{
                  ...heading1Style,
                }}
              >
                {props.topic?.heading}
              </H1>
              <Paragraph
                ncss={{
                  color: 'text',
                  fontSize: [5, 6],
                  lineHeight: [3, 4],
                }}
              >
                {props.topic?.abstract.abstract}
              </Paragraph>
            </Box>
            <Flex
              is="div"
              ncss={{
                label: 'Cta',
                mx: 'auto',
                flex: '0 1 auto',
              }}
            >
              <Action
                url={props.topic?.actions[0].url}
                heading={props.topic?.actions[0].heading}
                title={props.topic?.actions[0].title}
                ncss={{
                  ...buttonPrimaryStyle,
                  mx: 2,
                  fontSize: [5, 6],
                  lineHeight: [3, 4],
                }}
              />
            </Flex>
          </Box>
        </Container>
      </Box>
    </Fragment>
  )
}
