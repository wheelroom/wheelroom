import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { NavigationSegment } from '../navigation-segment/navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationLegal {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationLegalProps extends AnyDivProps {
  model?: NavigationLegal
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationLegalStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationLegal = ({ model, ...props }: NavigationLegalProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.legal) return null
  const css = navigationLegalStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Legal</H3>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.legal,
        }}
      />
    </Div>
  )
}
