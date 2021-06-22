import { Div, H3 } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationModal = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}
export type NavigationModalProps = ComponentProps<NavigationModal>['div']

export const navigationModalStyleFactory: StyleFactory = () => {
  return {}
}

export const NavigationModal = ({ model, ...props }: NavigationModalProps) => {
  const contentfulNavigationSegment = model?.contentfulNavigationSegment
  const css = navigationModalStyleFactory({})

  return (
    <Div css={css} {...props}>
      <H3>Navigation Modal</H3>
      <NavigationSegment model={{ contentfulNavigationSegment }} />
    </Div>
  )
}
