/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Wheel } from '../../types'
import { Text } from '../../model/text/text'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section'
import { Container, Fluid, Wrapper } from '../../element/grid'
import { BlogWheelStyle } from './page-section-blog-preset'
import { TopicWheelProps } from '../../model/topic/topic'
import { Heading } from '../../element/heading'

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
  topicProps: TopicWheelProps
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
  const text = blog.text
  const authors = blog.authors
  const featured = blog.featured
  const labels = blog.labels

  console.log('authors:', authors)
  console.log('featured:', featured)
  console.log('labels:', labels)

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Heading wheel={{ ...props.wheel, style: props.wheel.style.heading }}>
          {heading}
        </Heading>
        <Text
          locale={locale}
          wheel={{ ...props.wheel, style: props.wheel.style.text }}
          text={{
            text: text,
            __typename: '',
            title: '',
          }}
        />
      </ContainerType>
    </Wrapper>
  )
}
