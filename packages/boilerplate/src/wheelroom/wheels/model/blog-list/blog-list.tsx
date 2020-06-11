/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Any } from '../../element/any'
import { BlogListWheelStyle } from '../../section/blog/presets/blog-section-list-preset'
import { BlogProps } from '../../../../models/blog/blog'
import { Container, Fluid, Wrapper, Box, Flex } from '../../element/grid'
import { GLink } from '../../element/g-link'
import { Heading } from '../../element/heading'
import { Paragraph } from '../../element/paragraph'
import { Time } from '../../element/self'
import { TopicOptions } from '../../../lib/get-topic-options'
import { Wheel } from '../../types'
import { Image } from '../../element/image'

export interface BlogListWheel extends Wheel {
  style: BlogListWheelStyle
}

export interface BlogListWheelProps {
  /** Styling wheel */
  wheel: BlogListWheel
  /** Locale needed for rich text render */
  locale: string
  /** List of all blogs to render */
  blogPosts: BlogProps[]
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
  /** Topic options */
  topicOptions: TopicOptions
}

export const BlogList = (props: BlogListWheelProps) => {
  if (!props.blogPosts) {
    return null
  }

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        {props.blogPosts &&
          props.blogPosts.map((blog: BlogProps, index: number) => {
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

            if (!blog.categories) {
              return undefined
            }
            const categories =
              blog.categories.length > 0 ? blog.categories.join(', ') : ''
            return (
              <GLink
                key={index}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.blog,
                }}
                to={'/blog/' + blog.slug}
                ariaLabel={blog.heading + ' - ' + categories + ' - ' + dateTime}
              >
                <Flex
                  is="div"
                  wheel={{
                    ...props.wheel,
                    style: props.wheel.style.blog.media,
                  }}
                >
                  <Image
                    media={blog.media}
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.blog.media.image,
                    }}
                  />
                </Flex>
                <Flex
                  is="div"
                  wheel={{
                    ...props.wheel,
                    style: props.wheel.style.blog.content,
                  }}
                >
                  <Any
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.blog.content.categories,
                    }}
                    is="span"
                  >
                    {categories}
                  </Any>
                  <Box
                    is="div"
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.blog.content.text,
                    }}
                  >
                    <Heading
                      is="h3"
                      wheel={{
                        ...props.wheel,
                        style: props.wheel.style.blog.content.text.heading,
                      }}
                    >
                      {blog.heading}
                    </Heading>
                    <Paragraph
                      wheel={{
                        ...props.wheel,
                        style: props.wheel.style.blog.content.text.abstract,
                      }}
                    >
                      {blog.abstract?.abstract}
                    </Paragraph>
                  </Box>
                  <Time
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.blog.content.date,
                    }}
                    datetime={blog.date}
                  >
                    {dateTime}
                  </Time>
                </Flex>
              </GLink>
            )
          })}
      </ContainerType>
    </Wrapper>
  )
}
