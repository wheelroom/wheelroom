import { Nav } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationSitemap = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationSitemapProps = ComponentProps<NavigationSitemap>['nav']

export const navigationSitemapStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationSitemap = ({
  model,
  ...props
}: NavigationSitemapProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.sitemapCollection?.items?.length) return null
  const css = navigationSitemapStyleFactory({})

  return (
    <Nav css={css} role="navigation" {...props}>
      <NavigationSegmentList
        model={{
          contentfulNavigationSegment: section?.sitemapCollection?.items[0],
        }}
      />
    </Nav>
  )
}
