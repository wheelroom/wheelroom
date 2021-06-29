import { Div, Section } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationFooter = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationFooterProps = ComponentProps<
  NavigationFooter,
  undefined,
  undefined
>['section']

export const navigationFooterStyleFactory: StyleFactory = () => {
  return mediaQuery({
    label: 'wrapper',
    width: '100%',
    padding: 16,
    borderTop: '1px solid var(--colors-grey)',
  })
}

export const NavigationFooter = ({
  model,
  ...props
}: NavigationFooterProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.footerCollection?.items?.length) return null
  const css = navigationFooterStyleFactory({})
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
        <NavigationSegmentList
          model={{
            contentfulNavigationSegment: section?.footerCollection?.items[0],
          }}
          variant="menu"
          css={{ marginLeft: -8 }}
        />
        <NavigationSegment
          model={{
            contentfulNavigationSegment: section?.social,
          }}
          variant="secondary"
          options={{ hideHeading: true }}
        />
      </Div>
    </Section>
  )
}
