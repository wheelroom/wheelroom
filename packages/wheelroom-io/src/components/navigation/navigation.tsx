import { AnyProps } from '@wheelroom/any/any'
import { Div, H1 } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulNavigation } from './contentful-navigation'

export type Navigation = {
  contentfulNavigation?: ContentfulNavigation
}

export type NavigationVariant =
  | 'actions'
  | 'brand'
  | 'card'
  | 'legal'
  | 'menu'
  | 'social'

type AnyDivProps = AnyProps['div']
export interface NavigationProps extends AnyDivProps {
  model?: Navigation
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

export const Navigation = ({
  model,
  children,
  variant,
  ...props
}: NavigationProps) => {
  const css: any = navigationStyleFactory({
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <H1>{model.contentfulNavigation}</H1>
      {children}
    </Div>
  )
}
