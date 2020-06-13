/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Any } from '../../../elements/any'
import { BlogProps } from '../../blog/model-types'
import { Container, Fluid, Wrapper, Box, Flex } from '../../../elements/grid'
import { GLink } from '../../../elements/g-link'
import { Heading } from '../../../elements/heading'
import { Image } from '../../../elements/image'
import { Paragraph } from '../../../elements/paragraph'
import { Time } from '../../../elements/self'
import { Wheel } from '../../../types/wheel'
import { BlogListWheelStyle } from './blog-section-list-preset'

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
}

export const List = (props: BlogListWheelProps) => {
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
            let categories = blog.categories
            if (!categories) {
              categories = []
            }
            const getCategories =
              categories.length > 0 ? categories.join(', ') : ''

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
                    {getCategories}
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
