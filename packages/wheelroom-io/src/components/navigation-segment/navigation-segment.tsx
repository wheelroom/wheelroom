import { AnyProps } from '@wheelroom/any/any'
import { Div, H1 } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { NavigationVariant } from '../navigation/navigation'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export type NavigationSegment = {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['div']
export interface NavigationSegmentProps extends AnyDivProps {
  model?: NavigationSegment
  variant?: NavigationVariant
}

const styleMap: Partial<Record<NavigationVariant, any>> = {
  actions: {},
  brand: {},
  card: {},
  legal: {},
  menu: {},
  social: {},
}

export const navigationStyleFactory = (args: {
  variant?: NavigationVariant
  options?: any
}) => {
  const useVariant = args.variant || 'menu'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const NavigationSegment = ({
  model,
  children,
  variant,
  ...props
}: NavigationSegmentProps) => {
  const css: any = navigationStyleFactory({
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <H1>{model.contentfulNavigationSegment}</H1>
      {children}
    </Div>
  )
}
