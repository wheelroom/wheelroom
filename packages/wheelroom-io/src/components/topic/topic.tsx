import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import { topicVariantStyle } from './topic-variant-style'
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
  topicOptions: TopicOptions
  variantMap: TopicVariantMap
}

export const Topic = (props: TopicProps) => {
  return (
    <Div css={topicVariantStyle({ VariantMap: props.variantMap })}>
      <>
        <H1>{props.model.heading}</H1>
        <P>{props.model.abstract}</P>
      </>
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
