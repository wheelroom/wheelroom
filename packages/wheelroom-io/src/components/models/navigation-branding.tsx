import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationBranding {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationBrandingProps extends AnyDivProps {
  model?: NavigationBranding
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationBrandingStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationBranding = ({
  model,
  ...props
}: NavigationBrandingProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.legal) return null
  const css = navigationBrandingStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Branding</H3>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.legal,
        }}
      />
    </Div>
  )
}
