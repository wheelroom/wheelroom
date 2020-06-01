/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { Text } from '../../model/text/text'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section'
import { Box, Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { BlogWheelStyle } from './page-section-blog-preset'
import { Heading } from '../../element/heading'
import { TopicProps } from '../../../../models/topic'
import { Any } from '../../element/any'
import { Topic } from '../../model/topic/topic'
import { Time } from '../../element/self'

export interface BlogWheel extends Wheel {
  style: BlogWheelStyle
}

export interface BlogWheelProps {
  /** Styling wheel */
  wheel: BlogWheel
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Properties to configure Topic element */
  topicProps?: TopicProps[]
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}

export const PageSectionBlog = (props: BlogWheelProps) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!props.pageSection.blog) {
    return null
  }

  /** Get localisation for Date and Text translation */
  const locale = props.pageSection.locale

  /** Blog props */
  const blog = props.pageSection.blog
  const heading = blog.heading
  const topic = blog.topic
  const date = blog.date
  let createdAt = blog.createdAt
  const text = blog.text
  const authors = blog.authors

  /** Convert and Translate Date */
  if (date) {
    createdAt = date
  }
  const dateEvent = new Date(Date.parse(createdAt))
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const dateTime = dateEvent.toLocaleDateString(locale, dateOptions)

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
              {topic}
            </Any>
            <Time
              wheel={{ ...props.wheel, style: props.wheel.style.header.date }}
              datetime={date}
            >
              {dateTime}
            </Time>
            <Heading
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.heading,
              }}
            >
              {heading}
            </Heading>
          </Flex>
          <Text
            locale={locale}
            wheel={{ ...props.wheel, style: props.wheel.style.text }}
            text={{
              text: text,
              __typename: '',
              title: '',
            }}
          />
          <Flex wheel={{ ...props.wheel, style: props.wheel.style.authors }}>
            {authors &&
              authors.map((author: TopicProps, index: number) => {
                /** Set Topic Options for Authors */
                pageSectionInfo.topicOptions.hideIcon = true
                return (
                  <Topic
                    key={index}
                    maxActions={2}
                    fullTopicAsLink={false}
                    useHeadingElement="p"
                    pageSectionInfo={pageSectionInfo}
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
