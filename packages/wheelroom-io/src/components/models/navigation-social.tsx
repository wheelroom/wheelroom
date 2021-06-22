import { Div, H3 } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSocial = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationSocialProps = ComponentProps<NavigationSocial>['div']

export const navigationSocialStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationSocial = ({
  model,
  ...props
}: NavigationSocialProps) => {
  const contentfulNavigationSegment = model?.contentfulNavigationSegment
  const css = navigationSocialStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Social</H3>
      <NavigationSegment model={{ contentfulNavigationSegment }} />
    </Div>
  )
}
