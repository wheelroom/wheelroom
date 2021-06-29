import { Div, Li, Ul } from '@wheelroom/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { AnchorVariant } from '../elements/anchor'
import { H3 } from '../elements/heading'
import { Text } from '../elements/text'
import { ActionLink } from '../models/action-link'
import { ContentfulAction } from '../models/contentful-action'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegmentList = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationSegmentListOptions = ComponentOptions<
  'heading' | 'abstract'
>
export type NavigationSegmentListProps = ComponentProps<
  NavigationSegmentList,
  AnchorVariant,
  NavigationSegmentListOptions
>['div']

const styleMap: StyleMap<AnchorVariant> = {
  branding: {},
  link: {},
  menu: {
    flex: '1 1 0%',
    ul: {
      display: 'flex',
      flexDirection: 'row',
      margin: 0,
      padding: 0,
      li: {
        listStyle: 'none',
      },
    },
  },
  sitemap: {
    padding: 16,
    minWidth: ['100%', '50%', '33.3335%', '25%'],
    ul: {
      margin: 0,
      padding: 0,
      li: {
        listStyle: 'none',
        lineHeight: 1.5,
      },
    },
  },
}

export const navigationSegmentListStyleFactory: StyleFactory<
  AnchorVariant,
  NavigationSegmentListOptions
> = (args) => {
  const useVariant = args.variant || 'menu'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const NavigationSegmentList = ({
  model,
  variant,
  options,
  ...props
}: NavigationSegmentListProps) => {
  if (!model?.contentfulNavigationSegment?.actionsCollection?.items?.length)
    return null
  const actions = model.contentfulNavigationSegment.actionsCollection.items
  const css = navigationSegmentListStyleFactory({
    variant,
    options,
  })

  return (
    <Div css={css} {...props}>
      {options?.heading && (
        <H3>{model.contentfulNavigationSegment?.heading}</H3>
      )}
      {options?.abstract && (
        <Text>{model.contentfulNavigationSegment?.abstract}</Text>
      )}
      <Ul>
        {actions.map((contentfulAction: ContentfulAction) => (
          <Li key={contentfulAction.sys?.id}>
            <ActionLink model={{ contentfulAction }} variant={variant} />
          </Li>
        ))}
      </Ul>
    </Div>
  )
}
