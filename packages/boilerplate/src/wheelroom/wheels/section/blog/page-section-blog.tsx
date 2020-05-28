/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { Text } from '../../model/text/text'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section'
import { Container, Fluid, Wrapper } from '../../element/grid'
import { BlogWheelStyle } from './page-section-blog-preset'
import { Heading } from '../../element/heading'
import { TopicProps } from '../../../../models/topic'
import { Any } from '../../element/any'
import { Topic } from '../../model/topic/topic'
import { BlogProps } from '../../../../models/blog'
import { getTopicInfo } from '../../../lib/get-topic-info'

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
  const allBlogs = props.pageSection.allBlog.edges.map(
    (blogNode: any) => blogNode.node
  )

  /** Get localisation for Date and Text translation */
  const locale = props.pageSection.locale

  /** Blog props */
  const blog = props.pageSection.blog
  const heading = blog.heading
  const date = blog.date
  const text = blog.text
  const labels = blog.labels
  const authors = blog.authors

  /** Convert and Translate Date */
  const dateEvent = new Date(Date.parse(date))
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
        <Any
          is="article"
          wheel={{ ...props.wheel, style: props.wheel.style.article }}
        >
          LABELS
          <Heading wheel={{ ...props.wheel, style: props.wheel.style.heading }}>
            {heading}
          </Heading>
          <Any
            is="time"
            wheel={{ ...props.wheel, style: props.wheel.style.date }}
            datetime={date}
          >
            {dateTime}
          </Any>
          <Text
            locale={locale}
            wheel={{ ...props.wheel, style: props.wheel.style.text }}
            text={{
              text: text,
              __typename: '',
              title: '',
            }}
          />
          <strong>Written by</strong>
          {authors &&
            authors.map((author: TopicProps, index: number) => {
              /** Set Topic Options for Authors */
              pageSectionInfo.topicOptions.hideIcon = true
              return (
                <Topic
                  key={index}
                  maxActions={2}
                  fullTopicAsLink={false}
                  pageSectionActions={author.actions}
                  pageSectionInfo={pageSectionInfo}
                  topic={author}
                  wheel={{ ...props.wheel, style: props.wheel.style.author }}
                />
              )
            })}
          BLOG OVERVIEW
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
                pageSectionActions={blog.featured?.actions}
                pageSectionInfo={pageSectionInfo}
                topic={blog.featured}
                wheel={{ ...props.wheel, style: props.wheel.style.author }}
              />
            )
          })}
        </Any>
      </ContainerType>
    </Wrapper>
  )
}
