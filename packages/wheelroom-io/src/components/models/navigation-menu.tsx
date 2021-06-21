import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationMenu {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationMenuProps extends AnyDivProps {
  model?: NavigationMenu
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationMenuStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationMenu = ({ model, ...props }: NavigationMenuProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.legal) return null
  const css = navigationMenuStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Menu</H3>
      <NavigationSegment
        model={{
          contentfulNavigationSegment: section?.legal,
        }}
      />
    </Div>
  )
}
