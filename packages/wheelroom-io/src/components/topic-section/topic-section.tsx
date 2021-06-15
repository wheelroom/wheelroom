import { AnyProps } from '@wheelroom/any/any'
import { Div, Hr } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulTopic } from '../topic/contentful-topic'
import { Topic } from '../topic/topic'
import {
  ContentfulTopicSection,
  TopicSectionOption,
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'

export interface TopicSection {
  item?: ContentfulTopicSection
}

type AnyDivProps = AnyProps['div']
export interface TopicSectionProps extends AnyDivProps {
  model?: TopicSection
  options?: TopicSectionOptions
  variant?: TopicSectionVariant
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

const styleMap: Partial<Record<TopicSectionVariant, any>> = {
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
  video: baseStyle,
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
  variant?: TopicSectionVariant
  options?: TopicSectionOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicSection = ({ model, ...props }: TopicSectionProps) => {
  model = model || {}
  const item = model.item || {}
  const variant = item.variant
  if (variant === 'divider') {
    return <Hr css={topicSectionStyleFactory({ variant })} />
  }
  // Isolate topic options from topic section model
  const options: TopicSectionOptions = {}
  const optionKeys: TopicSectionOption[] = [
    'reversedOrder',
    'hideIcon',
    'hideMedia',
    'hideHeading',
    'hideAbstract',
    'hideAction',
  ]
  optionKeys.forEach((key: TopicSectionOption) => (options[key] = item[key]))

  const css: any = topicSectionStyleFactory({
    options,
    variant,
  })

  return (
    <Div css={{ width: '100%', label: 'wrapper' }}>
      <Div css={css} {...props}>
        {model.item?.topicsCollection?.items.map(
          (topic: ContentfulTopic, index) => (
            <Topic
              key={'id-' + topic.sys?.id + index}
              model={{ item: topic }}
              options={options}
              variant={variant}
            />
          )
        )}
      </Div>
    </Div>
  )
}
