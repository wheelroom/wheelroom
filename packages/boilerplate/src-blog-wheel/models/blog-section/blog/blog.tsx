/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react'
import { BlogProps } from '../../blog/model-types'
import {
  Any,
  Box,
  Flex,
  Heading,
  Image,
  Paragraph,
  Time,
  Wheel,
  NcssProps,
  NcssObjectProps,
  ImageElementStyle,
  VideoElementStyle,
} from '../../../../src-core'
import {
  TopicModelProps,
  Topic,
  TopicModelStyle,
} from '../../../../src-topic-wheel'
import { Text } from '../../../../src-text-wheel'
import { TextModelStyle } from '../../../../src-text-wheel/models/text/model-style-types'

export interface BlogSectionBlogVariationStyle {
  article?: NcssProps
  header?: NcssProps
  categories?: NcssProps
  date?: NcssProps
  heading?: NcssObjectProps
  abstract?: NcssObjectProps
  media?: NcssProps
  image?: ImageElementStyle
  video?: VideoElementStyle
  text: TextModelStyle
  authors?: NcssProps
  author: TopicModelStyle
}

export interface BlogSectionBlogWheel extends Wheel {
  style: BlogSectionBlogVariationStyle
}

export interface BlogWheelProps {
  /** Styling wheel */
  wheel: BlogSectionBlogWheel
  /** Locale needed for rich text render */
  locale: string
  /** Blog props to render */
  blog: BlogProps
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
  return (
    <Fragment>
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
              style: props.wheel.style.categories,
            }}
          >
            {getCategories}
          </Any>
          <Time
            wheel={{ ...props.wheel, style: props.wheel.style.date }}
            datetime={props.blog.date}
          >
            {dateTime}
          </Time>
          <Heading
            is="h1"
            wheel={{
              ...props.wheel,
              style: props.wheel.style.heading,
            }}
          >
            {props.blog.heading}
          </Heading>
          <Paragraph
            wheel={{
              ...props.wheel,
              style: props.wheel.style.abstract,
            }}
          >
            {props.blog.abstract?.abstract}
          </Paragraph>
        </Flex>
        {props.blog.media && (
          <Image
            includeFigcaption={true}
            media={props.blog.media}
            wheel={{ ...props.wheel, style: props.wheel.style.image }}
          />
        )}
        <Text
          locale={props.locale}
          wheel={{ ...props.wheel, style: props.wheel.style.text }}
          text={{ text: props.blog.text }}
        />
        <Flex wheel={{ ...props.wheel, style: props.wheel.style.authors }}>
          {props.blog.authors &&
            props.blog.authors.map((author: TopicModelProps, index: number) => {
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
    </Fragment>
  )
}
