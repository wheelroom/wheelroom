/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { Text } from '../../model/text/text'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section'
import { Box, Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { BlogListWheelStyle } from './page-section-blog-list-preset'
import { Heading } from '../../element/heading'
import { TopicProps } from '../../../../models/topic'
import { Any } from '../../element/any'
import { Topic } from '../../model/topic/topic'
import { BlogProps } from '../../../../models/blog'
import { getTopicInfo } from '../../../lib/get-topic-info'
import { Time } from '../../element/self'

export interface BlogListWheel extends Wheel {
  style: BlogListWheelStyle
}

export interface BlogListWheelProps {
  /** Styling wheel */
  wheel: BlogListWheel
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Properties to configure Topic element */
  topicProps?: TopicProps[]
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}

export const PageSectionBlogList = (props: BlogListWheelProps) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!props.pageSection.blog) {
    return null
  }
  const allBlogs = props.pageSection.allBlog.edges.map(
    (blogNode: any) => blogNode.node
  )

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
          {allBlogs.map((blog: BlogProps, index: number) => {
            if (!blog.featured) {
              return null
            }
            const featuredInfo = getTopicInfo(blog.featured)
            if (!featuredInfo.hasAction) {
              blog.featured.actions = [{ page: { path: '/blog/' + blog.slug } }]
            }
            return (
              <Topic
                key={index}
                maxActions={2}
                fullTopicAsLink={true}
                pageSectionInfo={pageSectionInfo}
                topic={blog.featured}
                wheel={{ ...props.wheel, style: props.wheel.style.featured }}
              />
            )
          })}
        </Flex>
      </ContainerType>
    </Wrapper>
  )
}
