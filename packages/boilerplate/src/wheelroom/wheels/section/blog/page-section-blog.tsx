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
import { Paragraph } from '../../element/paragraph'

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
  topicProps?: TopicProps
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}

export const PageSectionBlog = (props: BlogWheelProps) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasBlog) {
    return null
  }

  const blog = props.pageSection.blog
  const locale = props.pageSection.locale

  const heading = blog.heading
  const date = blog.date
  const text = blog.text
  const labels = blog.labels
  const authors = blog.authors

  // console.log('pageSectionInfo:', pageSectionInfo)
  // console.log('authors:', authors)
  // console.log('featured:', featured)
  // console.log('labels:', labels)

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
          <Heading wheel={{ ...props.wheel, style: props.wheel.style.heading }}>
            {heading}
          </Heading>
          <Any
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.article }}
          >
            {date}
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
          <div>
            <strong>Labels</strong>
          </div>
          {labels &&
            labels.map((label: TopicProps, index: number) => {
              return (
                <Any
                  key={index}
                  wheel={{ ...props.wheel, style: props.wheel.style.label }}
                >
                  {label.heading}
                </Any>
              )
            })}
          <div>
            <strong>Written by</strong>
          </div>
          {authors &&
            authors.map((author: TopicProps, index: number) => {
              return (
                <Any
                  key={index}
                  wheel={{ ...props.wheel, style: props.wheel.style.author }}
                >
                  <Heading
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.author.content.text.heading,
                    }}
                  >
                    {author.heading}
                  </Heading>
                  <Paragraph
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.author.content.text.abstract,
                    }}
                  >
                    {author.abstract.abstract}
                  </Paragraph>
                </Any>
              )
            })}
        </Any>
      </ContainerType>
    </Wrapper>
  )
}
