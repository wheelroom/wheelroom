import { AnyProps, Div, H3, H4 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationFooter = {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export type NavigationFooterProps extends AnyDivProps = {
  model?: NavigationFooter
}

export const navigationFooterStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationFooter = ({
  model,
  ...props
}: NavigationFooterProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.footerCollection?.items?.length) return null
  const css = navigationFooterStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Footer</H3>
      <NavigationSegmentList
        model={{
          contentfulNavigationSegment: section?.footerCollection?.items[0],
        }}
      />
      <H4>Navigation Actions</H4>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.actions,
        }}
        variant="actions"
      />
      <H4>Navigation Social</H4>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.social,
        }}
      />
    </Div>
  )
}
