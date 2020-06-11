/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Any } from '../../../elements/any'
import { BlogProps } from '../../blog/model-types'
import { BlogWheelStyle } from '../../../wheels/section/blog/presets/blog-section-preset'
import { Box, Container, Flex, Fluid, Wrapper } from '../../../elements/grid'
import { Heading } from '../../../elements/heading'
import { Image } from '../../../elements/image'
import { Paragraph } from '../../../elements/paragraph'
import { Text } from '../../../wheels/model/text/text'
import { Time } from '../../../elements/self'
import { Topic } from '../../../wheels/model/topic/topic'
import { TopicProps } from '../../topic/topic'
import { Wheel } from '../../../types/wheel'

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

  let categories = props.blog.categories
  if (!categories) {
    categories = []
  }
  const getCategories = categories.length > 0 ? categories.join(', ') : ''

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
              {getCategories}
            </Any>
            <Time
              wheel={{ ...props.wheel, style: props.wheel.style.header.date }}
              datetime={props.blog.date}
            >
              {dateTime}
            </Time>
            <Heading
              is="h1"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.heading,
              }}
            >
              {props.blog.heading}
            </Heading>
            <Paragraph
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.abstract,
              }}
            >
              {props.blog.abstract?.abstract}
            </Paragraph>
          </Flex>
          {props.blog.media && (
            <Image
              includeFigcaption={true}
              media={props.blog.media}
              wheel={{ ...props.wheel, style: props.wheel.style.media.image }}
            />
          )}
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
                    fullTopicAsLink={false}
                    key={index}
                    maxActions={2}
                    topic={author}
                    topicOptions={{
                      hideAction: false,
                      hideIcon: true,
                    }}
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
