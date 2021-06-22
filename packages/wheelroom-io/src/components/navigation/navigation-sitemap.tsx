import { Div, H3 } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationSitemap = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationSitemapProps = ComponentProps<NavigationSitemap>['div']

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
    <Div css={css} {...props}>
      <H3>Navigation Sitemap</H3>
      <NavigationSegmentList
        model={{
          contentfulNavigationSegment: section?.sitemapCollection?.items[0],
        }}
      />
    </Div>
  )
}
