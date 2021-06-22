import { Li, Ul } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory, StyleMap } from '../../lib/component-styles'
import { AnchorVariant } from '../elements/anchor'
import { ContentfulAction } from '../models/contentful-action'
import { ActionLink } from '../models/action-link'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'
import { mediaQuery } from '../../lib/media-query'

export type NavigationSegmentList = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationSegmentListProps = ComponentProps<
  NavigationSegmentList,
  AnchorVariant
>['ul']

const styleMap: StyleMap<AnchorVariant> = {
  link: {},
  menu: {
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    li: {
      listStyle: 'none',
    }
  },
  sitemap: {}
}

export const navigationSegmentListStyleFactory: StyleFactory<AnchorVariant, undefined> = (args) => {
  const useVariant = args.variant || 'menu'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const NavigationSegmentList = ({
  model,
  variant,
  ...props
}: NavigationSegmentListProps) => {
  if (!model?.contentfulNavigationSegment?.actionsCollection?.items?.length)
    return null
  const actions = model.contentfulNavigationSegment.actionsCollection.items
  const css = navigationSegmentListStyleFactory({
    variant,
  })

  return (
    <Ul css={css} {...props}>
      {actions.map((contentfulAction: ContentfulAction) => (
        <Li key={contentfulAction.sys?.id}>
          <ActionLink model={{ contentfulAction }} variant={variant} />
        </Li>
      ))}
    </Ul>
  )
}
