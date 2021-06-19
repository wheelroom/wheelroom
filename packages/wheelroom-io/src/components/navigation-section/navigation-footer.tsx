import { AnyProps, Div } from '@wheelroom/any/react'
import { NavigationSegment } from '../navigation-old/navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationFooter {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationFooterProps extends AnyDivProps {
  model?: NavigationFooter
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationFooterStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
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
      Navigation Footer Hoi
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.footerCollection?.items[0],
        }}
      />
    </Div>
  )
}