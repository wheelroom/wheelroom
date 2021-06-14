import { AnyProps } from '@wheelroom/any/any'
import { Div } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import { Action } from '../action/action'
import { Embed } from '../media/embed'
import { MediaBreakpoint } from '../media/breakpoint'
import { Asset } from '../media/asset'
import { mediaQuery } from '../../lib/media-query'
import { TopicContent } from './topic-content'
import { TopicMedia } from './topic-media'

// spaceScale: [0, 1:4, 2:8, 3:16, 4:24, 5:32, 6:40, 7:48, 8:56, 9:64, 10:72, 11:80, 12:88, 13:96],
// fontSizeScale: [0, 1:8, 2:10, 3:12, 4:14, 5:16, 6:18, 7:20, 8:24, 9:32, 10:42, 11:56, 12:72]

export type Topic = {
  sys?: {
    id: string
  }
  abstract?: string
  actionsCollection?: {
    items: Action[]
  }
  heading?: string
  icon?: string
  media?: Asset
  mediaBreakpoint?: MediaBreakpoint
  mediaEmbed?: Embed
  poster?: Asset
}
export type TopicVariant =
  | 'block'
  | 'card'
  | 'divider'
  | 'featured'
  | 'gallery'
  | 'headline'
  | 'hero'
  | 'image'
  | 'navigation'
  | 'quote'
  | 'showcase'
  | 'text'
  | 'video'

export type TopicOption =
  | 'reversedOrder'
  | 'hideIcon'
  | 'hideMedia'
  | 'hideHeading'
  | 'hideAbstract'
  | 'hideAction'

export type TopicOptions = Partial<Record<TopicOption, boolean>>

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

const styleMap: Partial<Record<TopicVariant, any>> = {
  block: {
    ...baseStyle,
    padding: '16px',
    width: ['100%', '50%', '33.33%'],
    maxWidth: '35em',
  },
  card: {
    ...baseStyle,
    border: '1px solid transparent',
    borderColor: 'lightgrey',
    borderRadius: '4px',
    boxShadow: '0 0 16px',
    color: 'lightgrey',
    margin: '16px',
    maxWidth: '288px',
    minWidth: '288px',
    textDecoration: 'none',
    '> div:last-of-type': {
      paddingTop: 0,
    },
    '> div:only-of-type': {
      paddingTop: '16px',
    },
    transition: 'transform .25s ease',
    ':hover': {
      transform: 'translate3d(0, -4px, 0)',
    },
  },
  divider: {
    margin: '1rem 0',
    color: 'inherit',
    backgroundColor: 'grey',
    border: 0,
    opacity: '0.25',
    height: '1px',
  },
  featured: {
    ...baseStyle,
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'space-evenly',
    padding: '16x 0',
    alignItems: 'center',
  },
  gallery: {
    width: '50%',
  },
  hero: {
    position: 'relative',
  },
  showcase: {
    ...baseStyle,
    flexDirection: ['column', 'row'],
    padding: '16px 0',
  },
}

const reversedOrderOptionStyle = {}

const hideMediaOptionStyle = {}

export const topicStyleFactory = (args: {
  variant?: TopicVariant
  options?: TopicOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([
    baseStyle,
    args.options?.reversedOrder && reversedOrderOptionStyle,
    args.options?.hideMedia && hideMediaOptionStyle,
  ])
}

type AnyDivProps = AnyProps['div']
export interface TopicProps extends AnyDivProps {
  model?: Topic
  options?: TopicOptions
  variant?: TopicVariant
}

export const Topic = ({ model, options, variant, ...props }: TopicProps) => {
  const css: any = topicStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <TopicMedia model={{ asset: model.media } as Asset} />
      <TopicContent
        model={{
          abstract: model.abstract,
          actions: model.actionsCollection?.items,
          heading: model.heading,
        }}
        options={options}
      />
    </Div>
  )
}

export const topicFragment = graphql`
  fragment Topic on Contentful_Topic {
    sys {
      id
    }
    heading
    abstract
    icon
    actionsCollection(limit: 1) {
      items {
        ...Action
      }
    }
    media {
      ...Asset
    }
    mediaBreakpoint {
      ...MediaBreakpoint
    }
    mediaEmbed {
      ...Embed
    }
    poster {
      ...Asset
    }
  }
`
