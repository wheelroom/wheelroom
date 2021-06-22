import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationSitemap = {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export type NavigationSitemapProps extends AnyDivProps = {
  model?: NavigationSitemap
}

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
