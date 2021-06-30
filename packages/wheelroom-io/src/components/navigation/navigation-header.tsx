import { Div, Nav, Section } from '@wheelroom/any/react'
import { useState } from 'react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { useGlobals } from '../../lib/globals-provider'
import { mediaQuery } from '../../lib/media-query'
import { Anchor } from '../elements/anchor'
import { Button } from '../elements/button'
import { ActionLink } from '../models/action-link'
import { ContentfulGlobals } from '../page/contentful-globals'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationModal } from './navigation-modal'
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
>['div']

const navigationHeaderStyle: StyleObject = {
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  padding: '0 16px',
  width: '100%',
}

const styleMap: StyleMap<NavigationHeaderVariant> = {
  fixed: {
    ...navigationHeaderStyle,
    margin: '0 auto',
    maxWidth: 1280,
  },
  fluid: navigationHeaderStyle,
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
  const [modalVisible, setModalVisible] = useState(false)
  type Context = { globals: ContentfulGlobals }
  const { globals } = useGlobals<Context>()
  const section = model?.contentfulNavigationSection
  if (!section?.headerCollection?.items?.length) return null
  const css = navigationHeaderStyleFactory({
    variant,
    options,
  })

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <>
      {/* TODO: refactor SkipToContent component. This is made for styling purposes only.  */}
      <Anchor
        css={{
          label: 'SkipToContent',
          left: '-100%',
          position: 'absolute',
          ':focus': {
            backgroundColor: 'var(--colors-amber)',
            color: 'var(--colors-black)',
            fontWeight: 'bold',
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
        {globals.skipToContentHeading}
      </Anchor>
      {/* Section element needs position Fixed or undefined variants */}
      <Section
        css={{
          height: 70,
          borderBottom: '1px solid var(--colors-grey)',
        }}
      >
        {/* Note: Here starts the NavigationHeader with fixed and fluid variants */}
        <Div css={css} {...props}>
          {/* TODO: refactor NavigationBranding model component. This is made for styling purposes only.  */}
          <Div
            css={{
              label: 'NavigationBranding',
              alignItems: 'center',
              display: 'flex',
              marginRight: 16,
            }}
          >
            <ActionLink
              variant="branding"
              model={{
                contentfulAction: {
                  page: {
                    path: '/',
                  },
                  heading: globals.siteHeading,
                },
              }}
            />
          </Div>
          {/* Wrap all segments within nav element for accessibility and responsive styling reasons */}
          <Nav
            css={mediaQuery({
              display: ['none', 'none', 'flex'],
              flex: '1 1 0%',
              alignItems: 'center',
            })}
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
              options={{
                hideIcon: true,
              }}
            />
          </Nav>
          <Div
            css={mediaQuery({
              display: ['flex', 'flex', 'none'],
              flex: '1 1 0%',
              alignItems: 'center',
              justifyContent: 'end',
            })}
          >
            <Button
              aria-controls="header-navigation"
              aria-expanded={modalVisible}
              aria-label="Open navigation"
              aria-pressed={modalVisible}
              id="modal-dialog"
              onClick={toggleModal}
              role="button"
            >
              Menu
            </Button>
            <NavigationModal
              toggleModal={toggleModal}
              modalVisible={modalVisible}
              model={{ contentfulNavigationSection: section }}
            />
          </Div>
        </Div>
      </Section>
    </>
  )
}
