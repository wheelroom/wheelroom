import { AnyProps, Div } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationActions } from './navigation-actions'
import { NavigationMenu } from './navigation-menu'
import { NavigationSocial } from './navigation-social'

export type NavigationHeader = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationHeaderProps = ComponentProps<NavigationHeader>['div']

export const navigationHeaderStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationHeader = ({
  model,
  ...props
}: NavigationHeaderProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.headerCollection?.items?.length) return null
  const css = navigationHeaderStyleFactory({})

  return (
    <Div css={css} {...props}>
      <NavigationMenu
        model={{
          contentfulNavigationSegment: section?.headerCollection?.items[0],
        }}
      />
      <NavigationActions
        model={{
          contentfulNavigationSegment: section?.actions,
        }}
      />
      <NavigationSocial
        model={{
          contentfulNavigationSegment: section?.social,
        }}
      />
    </Div>
  )
}
