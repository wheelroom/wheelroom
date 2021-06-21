import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export interface NavigationBranding {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['div']
export interface NavigationBrandingProps extends AnyDivProps {
  model?: NavigationBranding
}

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
