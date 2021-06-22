import { Div, H3 } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export type NavigationLegal = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationLegalProps = ComponentProps<NavigationLegal>['div']

export const navigationLegalStyleFactory: StyleFactory = () => {
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
