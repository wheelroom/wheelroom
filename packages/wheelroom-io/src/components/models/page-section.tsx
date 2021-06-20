import { ContentfulNavigationSection } from '../navigation/contentful-navigation-section'
import { ContentfulTopicSection } from '../topic/contentful-topic-section'
import { TopicSection } from '../topic/topic-section'
import { NavigationSection } from '../navigation/navigation-section'
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

export interface SectionsProps {
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
