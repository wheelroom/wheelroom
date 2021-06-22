import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationActions = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationActionsProps = ComponentProps<NavigationActions>['div']

export const navigationActionsStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationActions = ({
  model,
  ...props
}: NavigationActionsProps) => {
  const contentfulNavigationSegment = model?.contentfulNavigationSegment
  const css = navigationActionsStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Actions</H3>
      <NavigationSegment
        model={{ contentfulNavigationSegment }}
        variant="actions"
      />
    </Div>
  )
}
