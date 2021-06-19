import { AnyProps, Div, H3, H4 } from '@wheelroom/any/react'
import { NavigationSegment } from '../navigation-segment/navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationHeader {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationHeaderProps extends AnyDivProps {
  model?: NavigationHeader
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationHeaderStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
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
      <H3>Navigation Header</H3>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.headerCollection?.items[0],
        }}
      />
      <H4>Navigation Actions</H4>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.actions,
        }}
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
