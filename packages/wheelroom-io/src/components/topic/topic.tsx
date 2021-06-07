import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import {
  getTopicVariantProps,
  TopicVariantProps,
} from './get-topic-variant-props'
import { getTopicVariantStyle } from './get-topic-variant-style'
import { TopicVariantMap } from './topic-variants'

export type Topic = {
  abstract: string
  heading: string
  icon: string
  sys: {
    id: string
  }
}

export const options = [
  'reversedOrder',
  'hideIcon',
  'hideMedia',
  'hideHeading',
  'hideAbstract',
  'hideAction',
] as const
export type Option = typeof options[number]
export type TopicOptions = Partial<Record<Option, boolean>>

export interface TopicProps {
  model: Topic
  /** Index of the rendered section */
  sectionIndex: number
  /** Index of the rendered topic */
  topicIndex: number
  /** Topic render options */
  topicOptions: TopicOptions
  variantMap: TopicVariantMap
}

const NormalOrder = (props: TopicProps & TopicVariantProps) => (
  <>
    <H1>{props.model.heading}</H1>
    <P>{props.model.abstract}</P>
    <P>{props.useHeadingElement}</P>
  </>
)

const ReversedOrder = (props: TopicProps & TopicVariantProps) => (
  <>
    <P>{props.model.abstract}</P>
    <P>{props.useHeadingElement}</P>
    <H1>{props.model.heading}</H1>
  </>
)

export const Topic = (props: TopicProps) => {
  const topicVariantProps = getTopicVariantProps({
    variantMap: props.variantMap,
    topicIndex: props.topicIndex,
    sectionIndex: props.sectionIndex,
    topicOptions: props.topicOptions,
  })

  return (
    <Div css={getTopicVariantStyle({ VariantMap: props.variantMap })}>
      {topicVariantProps.topicOptions.reversedOrder ? (
        <ReversedOrder {...props} {...topicVariantProps} />
      ) : (
        <NormalOrder {...props} {...topicVariantProps} />
      )}
    </Div>
  )
}

export const fragment = graphql`
  fragment Topic on Contentful_Topic {
    sys {
      id
    }
    abstract
    heading
    icon
  }
`
