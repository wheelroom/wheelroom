import { AnyProps, Div, H3 } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export interface NavigationModal {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['div']
export interface NavigationModalProps extends AnyDivProps {
  model?: NavigationModal
}

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
