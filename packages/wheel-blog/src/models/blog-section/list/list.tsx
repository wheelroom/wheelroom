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
} from '@wheelroom/core'
import { BlogModel } from '../../blog/model'
import { BlogSectionListVariationNcssTree } from './ncss-tree'

interface ListWheel extends Wheel {
  style: BlogSectionListVariationNcssTree
}

interface ListData {
  hideAbstract: boolean
  hideCategories: boolean
  hideContent: boolean
  hideDate: boolean
  hideHeading: boolean
  hideMedia: boolean
  hideText: boolean
}

interface ListProps {
  /** Styling wheel */
  wheel: ListWheel
  /** Locale needed for rich text render */
  locale: string
  /** List of all blogs to render */
  blogPosts: BlogModel[]
  /** Data wheel */
  data: ListData
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
        props.blogPosts.map((blog: BlogModel, index: number) => {
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
                {!props.data.hideMedia && (
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
                )}
                {!props.data.hideContent && (
                  <Flex
                    is="div"
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.content,
                    }}
                  >
                    {!props.data.hideCategories && (
                      <Any
                        wheel={{
                          ...props.wheel,
                          style: props.wheel.style.categories,
                        }}
                        is="span"
                      >
                        {getCategories}
                      </Any>
                    )}
                    {!props.data.hideText && (
                      <Box
                        is="div"
                        wheel={{
                          ...props.wheel,
                          style: props.wheel.style.text,
                        }}
                      >
                        {!props.data.hideHeading && (
                          <Heading
                            is="h3"
                            wheel={{
                              ...props.wheel,
                              style: props.wheel.style.heading,
                            }}
                          >
                            {blog.heading}
                          </Heading>
                        )}
                        {!props.data.hideAbstract && (
                          <Paragraph
                            wheel={{
                              ...props.wheel,
                              style: props.wheel.style.abstract,
                            }}
                          >
                            {blog.abstract?.abstract}
                          </Paragraph>
                        )}
                      </Box>
                    )}
                    {!props.data.hideDate && (
                      <Time
                        wheel={{
                          ...props.wheel,
                          style: props.wheel.style.date,
                        }}
                        datetime={blog.date}
                      >
                        {dateTime}
                      </Time>
                    )}
                  </Flex>
                )}
              </GLink>
            </Li>
          )
        })}
    </Ul>
  )
}
