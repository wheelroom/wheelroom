import { Div } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { ButtonVariant } from '../elements/button'
import { ContentfulAction } from '../models/contentful-action'
import { ActionButton } from './action-button'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegmentVariant = 'actions'

export type NavigationSegment = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationSegmentProps = ComponentProps<
  NavigationSegment,
  ButtonVariant
>['div']

export const navigationSegmentStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationSegment = ({
  model,
  ...props
}: NavigationSegmentProps) => {
  if (!model?.contentfulNavigationSegment?.actionsCollection?.items?.length)
    return null
  const actions = model.contentfulNavigationSegment.actionsCollection.items
  const css = navigationSegmentStyleFactory({})

  return (
    <Div css={css} {...props}>
      {actions.map((contentfulAction: ContentfulAction) => (
        <ActionButton
          key={contentfulAction.sys?.id}
          model={{ contentfulAction }}
          variant="primary"
        />
      ))}
    </Div>
  )
}
