/** @jsx jsx */
import { Any } from '../../element/any'
import { BlogWheelStyle } from './page-section-blog-preset'
import { Box, Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { Heading } from '../../element/heading'
import { jsx } from '@emotion/core'
import { Text } from '../../model/text/text'
import { Time } from '../../element/self'
import { Topic } from '../../model/topic/topic'
import { TopicProps } from '../../../../models/topic/topic'
import { Wheel } from '../../types'
import { BlogProps } from '../../../../models/blog/blog'

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
}

export const PageSectionBlog = (props: BlogWheelProps) => {
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
              wheel={{ ...props.wheel, style: props.wheel.style.header.topic }}
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
          <Text
            locale={props.locale}
            wheel={{ ...props.wheel, style: props.wheel.style.text }}
            text={{ text: props.blog.text }}
          />
          <Flex wheel={{ ...props.wheel, style: props.wheel.style.authors }}>
            {props.blog.authors &&
              props.blog.authors.map((author: TopicProps, index: number) => {
                return (
                  <Topic
                    key={index}
                    maxActions={2}
                    fullTopicAsLink={false}
                    useHeadingElement="p"
                    topic={author}
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
