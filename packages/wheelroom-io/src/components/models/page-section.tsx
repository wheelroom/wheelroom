import { NavigationSection } from './navigation-section'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { TopicSection } from './topic-section'
import { ContentfulTopicSection } from './contentful-topic-section'
import { TextSection } from './text-section'
import { ContentfulTextSection } from './contentful-text-section'

const sectionMap = {
  Contentful_TopicSection: {
    component: TopicSection,
    propName: 'contentfulTopicSection',
  },
  Contentful_NavigationSection: {
    component: NavigationSection,
    propName: 'contentfulNavigationSection',
  },
  Contentful_TextSection: {
    component: TextSection,
    propName: 'contentfulTextSection',
  },
}

type SectionType = keyof typeof sectionMap

export type ContentfulPageSection =
  | ContentfulTopicSection
  | ContentfulNavigationSection
  | ContentfulTextSection

export type PageSection = {
  contentfulPageSections?: ContentfulPageSection[]
}

export type SectionsProps = {
  model?: PageSection
}

export const PageSection = (props: SectionsProps) => {
  return (
    <>
      {props.model?.contentfulPageSections?.map(
        (section: ContentfulPageSection, index) => {
          const sectionType = section.__typename as SectionType
          if (!(sectionType in sectionMap))
            return <>Section {sectionType} not found</>
          const Section = sectionMap[sectionType].component
          const model = { [sectionMap[sectionType].propName]: section }
          return <Section key={'id-' + section.sys?.id + index} model={model} />
        }
      )}
    </>
  )
}