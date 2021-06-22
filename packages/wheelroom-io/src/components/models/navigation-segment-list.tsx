import { Li, Ul } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { AnchorVariant } from '../elements/anchor'
import { ContentfulAction } from './contentful-action'
import { ActionLink } from './action-link'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegmentList = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationSegmentListProps = ComponentProps<
  NavigationSegmentList,
  AnchorVariant
>['ul']

export const navigationSegmentListStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationSegmentList = ({
  model,
  variant,
  ...props
}: NavigationSegmentListProps) => {
  if (!model?.contentfulNavigationSegment?.actionsCollection?.items?.length)
    return null
  const actions = model.contentfulNavigationSegment.actionsCollection.items
  const css = navigationSegmentListStyleFactory({})

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
