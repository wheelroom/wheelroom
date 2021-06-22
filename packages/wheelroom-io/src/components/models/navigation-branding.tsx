import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationBranding = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationBrandingProps = ComponentProps<NavigationBranding>['div']

export const navigationBrandingStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationBranding = ({
  model,
  ...props
}: NavigationBrandingProps) => {
  const contentfulNavigationSegment = model?.contentfulNavigationSegment
  const css = navigationBrandingStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Branding</H3>
      <NavigationSegment model={{ contentfulNavigationSegment }} />
    </Div>
  )
}
