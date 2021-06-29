import { Div, Nav } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationSitemap = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationSitemapProps = ComponentProps<NavigationSitemap>['nav']

export const navigationSitemapStyleFactory: StyleFactory = () => {
  return mediaQuery({
    label: 'wrapper',
    // Note: Padding applied on the sitemap segments
  })
}

export const NavigationSitemap = ({
  model,
  ...props
}: NavigationSitemapProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.sitemapCollection?.items?.length) return null
  const segments = section?.sitemapCollection.items
  const css = navigationSitemapStyleFactory({})

  return (
    <Nav css={css} role="navigation" {...props}>
      <Div
        css={{
          label: 'container',
          maxWidth: 1280 + 32,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {segments.map(
          (contentfulNavigationSegment: ContentfulNavigationSegment, index) => (
            <NavigationSegmentList
              key={index + `-` + contentfulNavigationSegment.sys?.id}
              model={{
                contentfulNavigationSegment,
              }}
              variant="sitemap"
              options={{
                heading: true,
                abstract: true,
              }}
            />
          )
        )}
      </Div>
    </Nav>
  )
}
