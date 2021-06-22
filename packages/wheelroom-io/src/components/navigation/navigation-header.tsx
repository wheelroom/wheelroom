import { Section } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationActions } from './navigation-actions'
import { NavigationMenu } from './navigation-menu'
import { NavigationSocial } from './navigation-social'

export type NavigationHeaderVariant = 'fixed' | 'fluid'
export type NavigationHeaderModel = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationHeaderProps = ComponentProps<
  NavigationHeaderModel,
  NavigationHeaderVariant,
  undefined
>['section']

const navigationHeaderBaseStyle = {
  display: 'block',
}

const styleMap: StyleMap<NavigationHeaderVariant> = {
  fixed: {
    ...navigationHeaderBaseStyle,
    maxWidth: 1280,
    margin: '0 auto',
  },
  fluid: navigationHeaderBaseStyle,
}

export const navigationHeaderStyleFactory: StyleFactory<
  NavigationHeaderVariant,
  undefined
> = (args) => {
  const useVariant = args.variant || 'fixed'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const NavigationHeader = ({
  variant,
  options,
  model,
  ...props
}: NavigationHeaderProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.headerCollection?.items?.length) return null
  const css = navigationHeaderStyleFactory({
    variant,
    options,
  })

  return (
    <Section css={css} {...props}>
      <NavigationMenu
        model={{
          contentfulNavigationSegment: section?.headerCollection?.items[0],
        }}
      />
      <NavigationActions
        model={{
          contentfulNavigationSegment: section?.actions,
        }}
      />
      <NavigationSocial
        model={{
          contentfulNavigationSegment: section?.social,
        }}
      />
    </Section>
  )
}
