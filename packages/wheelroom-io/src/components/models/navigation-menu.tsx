import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'
import { NavigationSegmentList } from './navigation-segment-list'

export interface NavigationMenu {
  contentfulNavigationSegment?: ContentfulNavigationSegment
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
  const contentfulNavigationSegment = model?.contentfulNavigationSegment
  const css = navigationMenuStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Menu</H3>
      <NavigationSegmentList
        model={{ contentfulNavigationSegment }}
        variant="header"
      />
    </Div>
  )
}
