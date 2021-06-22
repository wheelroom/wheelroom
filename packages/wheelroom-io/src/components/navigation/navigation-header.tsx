import { Div, Nav, Section, Strong } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { Anchor } from '../elements/anchor'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegment } from './navigation-segment'
import { NavigationSegmentList } from './navigation-segment-list'

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
  justifyContent: 'space-between',
  width: '100%',
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
    <Section {...props}>
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
      {/* Wrapper element needs position Fixed or undefined variants */}
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
          {/* Wrap all segments within nav element for accessibility and responsive styling reasons */}
          <Nav
            css={{
              display: 'flex',
              flex: '1 1 0%',
              alignItems: 'center',
            }}
          >
            {/* Before NavigationMenu, etc... We don't need an extra container, please use NavigationSegment and –List instead. */}
            <NavigationSegmentList
              model={{
                contentfulNavigationSegment:
                  section?.headerCollection?.items[0],
              }}
              variant="menu"
            />
            <NavigationSegment
              model={{ contentfulNavigationSegment: section?.actions }}
              variant="primary"
            />
            <NavigationSegment
              model={{ contentfulNavigationSegment: section?.social }}
              variant="secondary"
            />
          </Nav>
        </Div>
      </Div>
    </Section>
  )
}
