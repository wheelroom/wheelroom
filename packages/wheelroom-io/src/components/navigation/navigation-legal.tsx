import { A, Div, Section, Span, Sup } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export type NavigationLegal = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationLegalProps = ComponentProps<
  NavigationLegal,
  undefined,
  undefined
>['section']

export const navigationLegalStyleFactory: StyleFactory = () => {
  return mediaQuery({
    label: 'wrapper',
    width: '100%',
    padding: 16,
    borderTop: '1px solid var(--colors-grey)',
  })
}

export const NavigationLegal = ({ model, ...props }: NavigationLegalProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.legal) return null
  const css = navigationLegalStyleFactory({})

  return (
    <Section css={css} {...props}>
      <Div
        css={mediaQuery({
          label: 'container',
          display: 'flex',
          alignItems: 'center',
          fontSize: 14,
          flexDirection: ['column', 'row'],
          justifyContent: 'space-between',
          maxWidth: 1280,
          margin: '0 auto',
        })}
      >
        <Span css={{ marginBottom: 8 }}>© Copyright 2021 Wheelroom</Span>
        <Span css={{ marginBottom: 8 }}>
          <A href="https://www.wheelroom.io">Made with Wheelroom</A>
          {` `}
          <Sup>6.2.3</Sup>
        </Span>
      </Div>
    </Section>
  )
}
