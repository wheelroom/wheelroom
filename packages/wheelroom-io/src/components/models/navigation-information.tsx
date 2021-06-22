import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export type NavigationInformation = {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export type NavigationInformationProps extends AnyDivProps = {
  model?: NavigationInformation
}

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
    <Div css={css} {...props}>
      <H3>Navigation Information</H3>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.informationCollection?.items[0],
        }}
      />
    </Div>
  )
}
