/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  Any,
  Box,
  Flex,
  GLink,
  Heading,
  Image,
  Paragraph,
  Time,
  Wheel,
  Li,
  Ul,
} from '../../../../src-core'
import { BlogModelProps } from '../../blog/model-types'
import { BlogSectionListVariationNcssTree } from './model-ncss'

interface ListWheel extends Wheel {
  style: BlogSectionListVariationNcssTree
}

interface ListProps {
  /** Styling wheel */
  wheel: ListWheel
  /** Locale needed for rich text render */
  locale: string
  /** List of all blogs to render */
  blogPosts: BlogModelProps[]
}

export const List = (props: ListProps) => {
  if (!props.blogPosts) {
    return null
  }

  return (
    <Ul
      wheel={{
        ...props.wheel,
        style: props.wheel.style,
      }}
    >
      {props.blogPosts &&
        props.blogPosts.map((blog: BlogModelProps, index: number) => {
          if (!blog) {
            return null
          }
          /** Convert and Translate Date */
          const dateEvent = new Date(Date.parse(blog.date))
          const dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }

          const dateTime = dateEvent.toLocaleDateString(
            props.locale,
            dateOptions
          )
          let categories = blog.categories
          if (!categories) {
            categories = []
          }
          const getCategories =
            categories.length > 0 ? categories.join(', ') : ''

          return (
            <Li
              key={index}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.item,
              }}
            >
              <GLink
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.link,
                }}
                to={'/blog/' + blog.slug}
                ariaLabel={blog.heading + ' - ' + categories + ' - ' + dateTime}
              >
                <Flex
                  is="div"
                  wheel={{
                    ...props.wheel,
                    style: props.wheel.style.media,
                  }}
                >
                  <Image
                    media={blog.media}
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.image,
                    }}
                  />
                </Flex>
                <Flex
                  is="div"
                  wheel={{
                    ...props.wheel,
                    style: props.wheel.style.content,
                  }}
                >
                  <Any
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.categories,
                    }}
                    is="span"
                  >
                    {getCategories}
                  </Any>
                  <Box
                    is="div"
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.text,
                    }}
                  >
                    <Heading
                      is="h3"
                      wheel={{
                        ...props.wheel,
                        style: props.wheel.style.heading,
                      }}
                    >
                      {blog.heading}
                    </Heading>
                    <Paragraph
                      wheel={{
                        ...props.wheel,
                        style: props.wheel.style.abstract,
                      }}
                    >
                      {blog.abstract?.abstract}
                    </Paragraph>
                  </Box>
                  <Time
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.date,
                    }}
                    datetime={blog.date}
                  >
                    {dateTime}
                  </Time>
                </Flex>
              </GLink>
            </Li>
          )
        })}
    </Ul>
  )
}
