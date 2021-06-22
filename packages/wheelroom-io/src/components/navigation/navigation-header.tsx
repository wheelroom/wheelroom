import { Div, Section, Strong } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { Anchor } from '../elements/anchor'
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
  display: 'flex',
  padding: '0 16px',
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
    <Section css={{ display: 'block' }} {...props}>
      {/* TODO: refactor SkipToContent component. This is made for styling purposes only.  */}
      <Anchor
        css={{
          left: '-100%',
          position: 'absolute',
          ':focus': {
            backgroundColor: 'white',
            left: 0,
            padding: 16,
            right: 0,
            textAlign: 'center',
            top: 0,
            width: '100%',
            zIndex: 1002,
          },
        }}
        href="#content"
      >
        Skip to Wheelroom content
      </Anchor>
      {/* TODO: Give Wrapper element position Fixed or undefined variants */}
      <Div
        css={{
          label: 'wrapper',
          height: 70,
          borderBottom: '1px solid black',
        }}
      >
        {/* Note: Here starts the NavigationHeader with fixed and fluid variants */}
        <Div css={css}>
          {/* TODO: refactor NavigationBranding model component. This is made for styling purposes only.  */}
          <Div
            css={{
              label: 'NavigationBranding',
              alignItems: 'center',
              display: 'flex',
              marginRight: 16,
            }}
          >
            <Anchor href="./">
              <Strong>Wheelroom</Strong>
            </Anchor>
          </Div>
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
        </Div>
      </Div>
    </Section>
  )
}
