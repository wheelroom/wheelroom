import { Div, H3 } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationMenu = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationMenuProps = ComponentProps<NavigationMenu>['div']

export const navigationMenuStyleFactory: StyleFactory = () => {
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
        variant="menu"
      />
    </Div>
  )
}
