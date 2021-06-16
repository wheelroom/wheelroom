import { AnyProps, Div, H1 } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export type NavigationSection = {
  contentfulNavigationSection?: ContentfulNavigationSection
}

export type NavigationSectionVariant = 'header' | 'footer' | 'sitemap'

type AnyDivProps = AnyProps['div']
export interface NavigationSectionProps extends AnyDivProps {
  model?: NavigationSection
  variant?: NavigationSectionVariant
}

const styleMap: Partial<Record<NavigationSectionVariant, any>> = {
  header: {},
  footer: {},
  sitemap: {},
}

export const navigationStyleFactory = (args: {
  variant?: NavigationSectionVariant
  options?: any
}) => {
  const useVariant = args.variant || 'header'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const NavigationSection = ({
  model,
  children,
  variant,
  ...props
}: NavigationSectionProps) => {
  const css: any = navigationStyleFactory({
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <H1>{model.contentfulNavigationSection}</H1>
      {children}
    </Div>
  )
}
