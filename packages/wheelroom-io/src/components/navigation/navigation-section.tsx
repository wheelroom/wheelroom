import { ComponentProps } from '../../lib/component-styles'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationFooter } from './navigation-footer'
import { NavigationHeader } from './navigation-header'
import { NavigationLegal } from './navigation-legal'
import { NavigationSitemap } from './navigation-sitemap'

export type NavigationSection = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationSectionProps = ComponentProps<
  NavigationSection,
  undefined,
  undefined
>['div']

export const NavigationSection = (props: NavigationSectionProps) => {
  return (
    <>
      <NavigationHeader variant="fixed" {...props} />
      <NavigationSitemap {...props} />
      <NavigationFooter {...props} />
      <NavigationLegal {...props} />
    </>
  )
}
