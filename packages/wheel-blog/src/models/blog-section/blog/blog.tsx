/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Any,
  Box,
  Flex,
  Heading,
  Image,
  Paragraph,
  Time,
  Wheel,
} from '@wheelroom/core'
import { TopicModel, Topic } from '@wheelroom/wheel-topic'
import { RichText } from '@wheelroom/wheel-text'
import { BlogData } from './data'
import { BlogModel } from '../../blog/model'
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
  /** Data wheel */
  data: BlogData
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
      {!props.data.hideHeader && (
        <Flex
          is="header"
          wheel={{ ...props.wheel, style: props.wheel.style.header }}
        >
          {!props.data.hideCategories && (
            <Any
              is="span"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.categories,
              }}
            >
              {getCategories}
            </Any>
          )}
          {!props.data.hideDate && (
            <Time
              wheel={{ ...props.wheel, style: props.wheel.style.date }}
              datetime={props.blog.date}
            >
              {dateTime}
            </Time>
          )}
          {!props.data.hideHeading && (
            <Heading
              is="h1"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.heading,
              }}
            >
              {props.blog.heading}
            </Heading>
          )}
          {!props.data.hideAbstract && (
            <Paragraph
              wheel={{
                ...props.wheel,
                style: props.wheel.style.abstract,
              }}
            >
              {props.blog.abstract?.abstract}
            </Paragraph>
          )}
        </Flex>
      )}
      {!props.data.hideMedia && props.blog.media && (
        <Image
          includeFigcaption={true}
          media={props.blog.media}
          wheel={{ ...props.wheel, style: props.wheel.style.image }}
        />
      )}
      {!props.data.hideRichText && (
        <RichText
          locale={props.locale}
          wheel={{ ...props.wheel, style: props.wheel.style.richText }}
          textJson={props.blog.text.json}
        />
      )}
      {!props.data.hideAuthors && (
        <Flex wheel={{ ...props.wheel, style: props.wheel.style.authors }}>
          {props.blog.authors &&
            props.blog.authors.map((author: TopicModel, index: number) => {
              return (
                <Topic
                  data={props.data.author}
                  fullTopicAsLink={false}
                  key={index}
                  maxActions={2}
                  topic={author}
                  topicOptions={{
                    hideAction: false,
                    hideIcon: false,
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
      )}
    </Box>
  )
}
