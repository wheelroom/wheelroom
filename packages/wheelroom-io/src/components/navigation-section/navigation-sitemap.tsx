import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { NavigationSegment } from '../navigation-segment/navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationSitemap {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationSitemapProps extends AnyDivProps {
  model?: NavigationSitemap
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationSitemapStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
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
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.sitemapCollection?.items[0],
        }}
      />
    </Div>
  )
}
