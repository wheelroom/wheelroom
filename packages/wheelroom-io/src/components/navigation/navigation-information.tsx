import { Section } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export type NavigationInformation = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationInformationProps = ComponentProps<
  NavigationInformation,
  undefined,
  undefined
>['section']

export const navigationInformationStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationInformation = ({
  model,
  ...props
}: NavigationInformationProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.informationCollection?.items?.length) return null
  const css = navigationInformationStyleFactory({})

  return (
    <Section css={css} {...props}>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.informationCollection?.items[0],
        }}
      />
    </Section>
  )
}
