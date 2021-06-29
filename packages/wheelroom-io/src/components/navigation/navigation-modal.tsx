import { Div, Section } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { Button } from '../elements/button'
import { Icon } from '../elements/icon'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegment } from './navigation-segment'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationModalModel = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type ModalProps = {
  modalVisible?: boolean
  toggleModal: () => void
}
export type NavigationModalProps = ModalProps &
  ComponentProps<NavigationModalModel, undefined, undefined>['div']

const dialogStyle: StyleObject = {
  position: 'fixed',
  display: 'flex',
  inset: '0%',
  width: '100%',
  height: '100%',
  zIndex: 1050,
  justifyContent: 'flex-end',
  visibility: 'visible',
  overflowY: 'auto',
}

export const navigationModalStyleFactory: StyleFactory = () => {
  return mediaQuery([dialogStyle])
}

export const NavigationModal = ({
  model,
  modalVisible,
  toggleModal,
  ...props
}: NavigationModalProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.headerCollection?.items?.length) return null
  const css = navigationModalStyleFactory({})
  console.log('props', props)
  return (
    <Div
      css={css}
      role="dialog"
      tabIndex={-1}
      aria-hidden={modalVisible ? false : undefined}
      aria-modal={modalVisible ? true : undefined}
      hidden={!modalVisible ? true : undefined}
      style={{
        visibility: modalVisible ? 'visible' : 'hidden',
      }}
      {...props}
    >
      <Div
        aria-hidden={true}
        css={{
          content: `""`,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'fixed',
          zIndex: -1,
          inset: '0%',
          opacity: 1,
          transition: 'opacity 2s ease 0s',
          visibility: modalVisible ? 'visible' : 'hidden',
        }}
        onClick={toggleModal}
      />
      <Section
        role="document"
        id="header-navigation"
        aria-label="Header navigation"
        css={mediaQuery([
          {
            display: 'flex',
            color: 'rgb(102, 102, 102)',
            borderRadius: 4,
            boxShadow: '0px 0px 16px',
            width: ['100%', '360px'],
            margin: 16,
            height: 'fit-content',
            backgroundColor: 'white',
            border: '1px solid rgb(102, 102, 102)',
            overflow: 'hidden',
            flexDirection: 'column',
            alignItems: 'flex-end',
            opacity: 1,
            transform: 'scale(1)',
            transition: 'transform .1s ease 0s, opacity .1s ease 0s',
            visibility: modalVisible ? 'visible' : 'hidden',
          },
        ])}
      >
        <Button
          aria-label="Close navigation"
          role="button"
          type="button"
          onClick={toggleModal}
          options={{
            hideHeading: true,
          }}
          css={{
            cursor: 'pointer',
            marginTop: 16,
            marginRight: 16,
          }}
        >
          <Icon variant="X" options={{ large: true }} />
        </Button>
        <NavigationSegmentList
          model={{
            contentfulNavigationSegment: section?.headerCollection?.items[0],
          }}
          variant="menu"
          css={{
            width: '100%',
            ul: {
              flexDirection: 'column',
              li: {
                borderBottom: '1px solid transparent',
                borderColor: 'silver',
                a: {
                  display: 'block',
                },
              },
            },
          }}
        />
        <NavigationSegment
          model={{ contentfulNavigationSegment: section?.actions }}
          variant="primary"
          options={{
            hideIcon: true,
          }}
          css={{
            width: '100%',
            margin: 0,
            a: {
              display: 'flex',
            },
          }}
        />
      </Section>
    </Div>
  )
}
