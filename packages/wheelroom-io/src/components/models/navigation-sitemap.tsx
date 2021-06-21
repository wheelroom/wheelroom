import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegmentList } from './navigation-segment-list'

export interface NavigationSitemap {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationSitemapProps extends AnyDivProps {
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
