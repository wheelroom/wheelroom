import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSocial = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['div']
export type NavigationSocialProps extends AnyDivProps = {
  model?: NavigationSocial
}

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
