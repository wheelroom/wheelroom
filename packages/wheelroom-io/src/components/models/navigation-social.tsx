import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationSocial {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationSocialProps extends AnyDivProps {
  model?: NavigationSocial
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationSocialStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationSocial = ({
  model,
  ...props
}: NavigationSocialProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.legal) return null
  const css = navigationSocialStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Social</H3>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.legal,
        }}
      />
    </Div>
  )
}
