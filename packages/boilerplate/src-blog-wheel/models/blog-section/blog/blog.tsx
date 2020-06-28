/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlogModel } from '../../blog/model'
import {
  Any,
  Box,
  Flex,
  Heading,
  Image,
  Paragraph,
  Time,
  Wheel,
} from '../../../../src-core'
import { TopicModel, Topic } from '../../../../src-topic-wheel'
import { RichText } from '../../../../src-text-wheel'
import { BlogSectionBlogVariationNcssTree } from './ncss-tree'

interface BlogWheel extends Wheel {
  style: BlogSectionBlogVariationNcssTree
}

interface BlogProps {
  /** Styling wheel */
  wheel: BlogWheel
  /** Locale needed for rich text render */
  locale: string
  /** Blog props to render */
  blog: BlogModel
}

export const Blog = (props: BlogProps) => {
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
    <Box is="article" wheel={{ ...props.wheel, style: props.wheel.style }}>
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
      <RichText
        locale={props.locale}
        wheel={{ ...props.wheel, style: props.wheel.style.richText }}
        textJson={props.blog.text.json}
      />
      <Flex wheel={{ ...props.wheel, style: props.wheel.style.authors }}>
        {props.blog.authors &&
          props.blog.authors.map((author: TopicModel, index: number) => {
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
  )
}
