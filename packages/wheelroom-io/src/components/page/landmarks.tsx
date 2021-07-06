import React, { Fragment } from 'react'
import { Aside, Footer, Header, Main } from '@wheelroom/any/react'
import { ContentfulTopicSection } from '../topic/contentful-topic-section'
import { ContentfulNavigationSection } from '../navigation/contentful-navigation-section'
import { ContentfulTextSection } from '../models/contentful-text-section'
import { GridTemplate } from '../layout/grid-template'

/**
 *
 * This element wraps the landmark element specified in sections.jsx around each
 * section. Note that the landmarks are added in a fixed order as shown in the
 * Fragment below. As a consequence the order of the sections is bound to the
 * order of the landmarks below.
 *
 * To change this behaviour, change the getLandmark method
 *
 */

interface GetLandMark {
  section: {
    model?: {
      contentfulTopicSection?: ContentfulTopicSection
      contentfulNavigationSection?: ContentfulNavigationSection
      contentfulTextSection?: ContentfulTextSection
    }
  }
  sectionCount: number
  sectionIndex: number
}

const getLandmark = ({
  section,
  sectionCount,
  sectionIndex,
}: GetLandMark): string => {
  const isNavigationSection = !!section.model?.contentfulNavigationSection
  const isTopicSection = !!section.model?.contentfulTopicSection
  const isHero =
    isTopicSection && section.model?.contentfulTopicSection?.variant === 'hero'
  if (sectionIndex <= 1 && (isHero || isNavigationSection)) {
    return 'header'
  }
  if (sectionIndex === sectionCount - 1 && isNavigationSection) {
    return 'footer'
  }

  return 'main'
}

export const Landmarks = (props: any) => {
  const landMarkedChildren = {
    aside: [],
    footer: [],
    header: [],
    main: [],
  } as any

  React.Children.forEach(props.children, (child, sectionIndex) => {
    landMarkedChildren[
      getLandmark({
        section: child.props,
        sectionCount: React.Children.count(props.children),
        sectionIndex,
      })
    ].push(<Fragment key={`section-${sectionIndex}`}>{child}</Fragment>)
  })

  return (
    <GridTemplate variant="pancake">
      {landMarkedChildren.header}
      <Main role="main" id="content">
        {landMarkedChildren.main}
      </Main>
      <Footer
        css={{
          backgroundColor: '#F5F5F5',
        }}
        role="contentinfo"
      >
        {landMarkedChildren.footer}
      </Footer>
    </GridTemplate>
  )
}
