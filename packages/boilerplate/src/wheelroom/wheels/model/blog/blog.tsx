/** @jsx jsx */
import { Any } from '../../element/any'
import { BlogProps } from '../../../../models/blog/blog'
import { BlogWheelStyle } from '../../section/blog/presets/blog-section-preset'
import { Box, Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { Heading } from '../../element/heading'
import { jsx } from '@emotion/core'
import { Text } from '../text/text'
import { Time } from '../../element/self'
import { Topic } from '../topic/topic'
import { TopicOptions } from '../../../lib/get-topic-options'
import { TopicProps } from '../../../../models/topic/topic'
import { Wheel } from '../../types'

export interface BlogWheel extends Wheel {
  style: BlogWheelStyle
}

export interface BlogWheelProps {
  /** Styling wheel */
  wheel: BlogWheel
  /** Locale needed for rich text render */
  locale: string
  /** Blog props to render */
  blog: BlogProps
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
  /** Topic options */
  topicOptions: TopicOptions
}

export const Blog = (props: BlogWheelProps) => {
  if (!props.blog) {
    return null
  }

  /** Convert and Translate Date */
  const dateEvent = new Date(Date.parse(props.blog.date))
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const dateTime = dateEvent.toLocaleDateString(props.locale, dateOptions)

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Box
          is="article"
          wheel={{ ...props.wheel, style: props.wheel.style.article }}
        >
          <Flex
            is="header"
            wheel={{ ...props.wheel, style: props.wheel.style.header }}
          >
            <Any
              is="span"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.categories,
              }}
            >
              {props.blog.categories}
            </Any>
            <Time
              wheel={{ ...props.wheel, style: props.wheel.style.header.date }}
              datetime={props.blog.date}
            >
              {dateTime}
            </Time>
            <Heading
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.heading,
              }}
            >
              {props.blog.heading}
            </Heading>
          </Flex>
          {/* <Text
            locale={props.locale}
            wheel={{ ...props.wheel, style: props.wheel.style.text }}
            text={{ text: props.blog.text }}
          /> */}
          <Flex wheel={{ ...props.wheel, style: props.wheel.style.authors }}>
            {props.blog.authors &&
              props.blog.authors.map((author: TopicProps, index: number) => {
                return (
                  <Topic
                    fullTopicAsLink={false}
                    key={index}
                    maxActions={2}
                    topic={author}
                    topicOptions={props.topicOptions}
                    useHeadingElement="p"
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.author,
                    }}
                  />
                )
              })}
          </Flex>
        </Box>
      </ContainerType>
    </Wrapper>
  )
}
