import { NavigationSection } from '../navigation/navigation-section'
import { TopicSection } from '../topic/topic-section'
import { ContentfulNavigationSection } from '../navigation/contentful-navigation-section'
import { ContentfulTopicSection } from '../topic/contentful-topic-section'
import { Landmarks } from '../page/landmarks'
import { TextSection } from '../models/text-section'
import { ContentfulTextSection } from '../models/contentful-text-section'

export const sectionMap = {
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

export type SectionType = keyof typeof sectionMap

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
    <Landmarks>
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
    </Landmarks>
  )
}