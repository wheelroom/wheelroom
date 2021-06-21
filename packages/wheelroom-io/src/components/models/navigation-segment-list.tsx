import { AnyProps, Li, Ul } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'
import { ContentfulAction } from './contentful-action'
import { ActionLink, ActionLinkVariant } from './action-link'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegmentListVariant = ActionLinkVariant

export interface NavigationSegmentList {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['ul']
export interface NavigationSegmentListProps extends AnyDivProps {
  model?: NavigationSegmentList
  variant?: NavigationSegmentListVariant
}

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
