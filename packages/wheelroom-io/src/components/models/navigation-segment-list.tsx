import { AnyProps, Li, Ul } from '@wheelroom/any/react'
import { ContentfulAction } from './contentful-action'
import { ActionLink } from './action-link'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegmentListVariant = 'header' | 'footer' | 'sitemap'

export interface NavigationSegmentList {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['ul']
export interface NavigationSegmentListProps extends AnyDivProps {
  model?: NavigationSegmentList
  variant?: NavigationSegmentListVariant
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationSegmentListStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
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
