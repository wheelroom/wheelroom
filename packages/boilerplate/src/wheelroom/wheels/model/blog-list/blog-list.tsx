/** @jsx jsx */
import { BlogListWheelStyle } from '../../section/blog/presets/blog-section-list-preset'
import { BlogProps, AllBlogProps } from '../../../../models/blog/blog'
import { Box, Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { Heading } from '../../element/heading'
import { jsx } from '@emotion/core'
import { TopicOptions } from '../../../lib/get-topic-options'
import { Wheel } from '../../types'

export interface BlogListWheel extends Wheel {
  style: BlogListWheelStyle
}

export interface BlogListWheelProps {
  /** Styling wheel */
  wheel: BlogListWheel
  /** Locale needed for rich text render */
  locale: string
  /** List of all blogs to render */
  allBlog: AllBlogProps
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
  /** Topic options */
  topicOptions: TopicOptions
}

export const BlogList = (props: BlogListWheelProps) => {
  if (!props.allBlog) {
    return null
  }

  const allBlog = props.allBlog.edges.map((blogNode: any) => blogNode.node)

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        {/* <Ul wheel={wheel} ncss={{ listStyle: 'none' }}>
            {allBlog.map((blog: BlogProps, index: number) => {
              return (
                <Li key={index} wheel={wheel}>
                  <Action wheel={wheel} page={{ path: '/blog/' + blog.slug }}>
                    {blog.heading}
                  </Action>
                </Li>
              )
            })}
          </Ul> */}
        <Flex wheel={{ ...props.wheel, style: props.wheel.style.blogList }}>
          <Heading
            is="h2"
            wheel={{
              ...props.wheel,
              style: props.wheel.style.blogList.heading,
            }}
          >
            Read the latest articles
          </Heading>
          {allBlog.map((blog: BlogProps, index: number) => {
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
            // if (!featuredInfo.hasAction) {
            //   blog.featured.actions = [{ page: { path: '/blog/' + blog.slug } }]
            // }
            return (
              <Box wheel={props.wheel} key={index}>
                {blog.heading}
                {dateTime}
              </Box>
            )
          })}
        </Flex>
      </ContainerType>
    </Wrapper>
  )
}
