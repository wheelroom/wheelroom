import { Div } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationFooter } from './navigation-footer'
import { NavigationHeader } from './navigation-header'
import { NavigationInformation } from './navigation-information'
import { NavigationLegal } from './navigation-legal'
import { NavigationSitemap } from './navigation-sitemap'

export type NavigationSection = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationSectionProps = ComponentProps<NavigationSection>['div']

export const navigationSectionStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationSection = (props: NavigationSectionProps) => {
  const css = navigationSectionStyleFactory({})
  // TODO: Switch from <header /> to <footer /> depending on the position in our Page model component
  const isHeaderOrFooter = 'header'
  const isBannerOrContentinfo = 'banner'
  return (
    <Div is={isHeaderOrFooter} role={isBannerOrContentinfo} css={css}>
      <NavigationHeader variant="fixed" {...props} />
      <NavigationInformation {...props} />
      <NavigationSitemap {...props} />
      <NavigationFooter {...props} />
      <NavigationLegal {...props} />
    </Div>
  )
}
