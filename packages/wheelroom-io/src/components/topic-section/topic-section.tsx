import { AnyProps } from '@wheelroom/any/any'
import { graphql } from 'gatsby'
import { Div, Hr } from '@wheelroom/any/elements'
import { Topic, TopicOption, TopicOptions, TopicVariant } from '../topic/topic'
import { mediaQuery } from '../../lib/media-query'

export interface TopicSection extends TopicOptions {
  sys?: {
    id: string
  }
  __typename?: string
  variant?: TopicVariant
  topicsCollection?: {
    items: Topic[]
  }
}

const baseStyle = {
  display: 'flex',
  width: '100%',
  label: 'topicSection',
  flexDirection: 'column',
  paddingBottom: '16px',
}
const maxWidthStyle = {
  ...baseStyle,
  maxWidth: '1280px',
  margin: '0 auto',
}

const styleMap: Partial<Record<TopicVariant, any>> = {
  block: {
    ...maxWidthStyle,
    alignItems: ['center', 'initial'],
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
  },
  card: {
    ...maxWidthStyle,
    alignItems: 'stretch',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  divider: {
    ...maxWidthStyle,
    margin: '1rem 0',
    color: 'inherit',
    backgroundColor: 'grey',
    border: 0,
    opacity: '0.25',
    height: '1px',
  },
  gallery: {
    ...maxWidthStyle,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  hero: { ...baseStyle, paddingBottom: '0' },
  image: {
    ...maxWidthStyle,
    flexDirection: ['column', 'row'],
  },
  quote: {
    paddingBottom: '40px',
  },
  showcase: {
    ...maxWidthStyle,
    alignItems: ['center', 'baseline'],
    justifyContent: 'center',
    maxWidth: ['35em', '54rem'],
  },
}

export const topicSectionStyleFactory = (args: {
  variant?: TopicVariant
  options?: TopicOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

type AnyDivProps = AnyProps['div']
export interface TopicSectionProps extends AnyDivProps {
  model?: TopicSection
  options?: Topic
  variant?: TopicVariant
}

export const TopicSection = ({
  model,
  variant,
  ...props
}: TopicSectionProps) => {
  if (variant === 'divider') {
    return <Hr css={topicSectionStyleFactory({ variant })} />
  }
  // Isolate topic options from topic section model
  const options: TopicOptions = {}
  const optionKeys: TopicOption[] = [
    'reversedOrder',
    'hideIcon',
    'hideMedia',
    'hideHeading',
    'hideAbstract',
    'hideAction',
  ]
  model = model || {}
  optionKeys.forEach((key: TopicOption) => (options[key] = model![key]))

  const css: any = topicSectionStyleFactory({
    options,
    variant,
  })

  return (
    <Div css={{ width: '100%', label: 'wrapper' }}>
      <Div css={css} {...props}>
        {model.topicsCollection?.items.map((topic: Topic) => (
          <Topic
            key={topic.sys?.id}
            model={topic}
            options={options}
            variant={variant}
          />
        ))}
      </Div>
    </Div>
  )
}

export const fragment = graphql`
  fragment TopicSection on Contentful_TopicSection {
    __typename
    sys {
      id
    }
    variant
    reversedOrder
    hideIcon
    hideMedia
    hideHeading
    hideAbstract
    hideAction
    topicsCollection(limit: 20) {
      items {
        ...Topic
      }
    }
  }
`
