import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationLegal {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationLegalProps extends AnyDivProps {
  model?: NavigationLegal
}

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
