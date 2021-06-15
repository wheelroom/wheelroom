import { ContentfulTopicSection } from '../topic-section/contentful-topic-section'
import { TopicSection } from '../topic-section/topic-section'

export type Sections = {
  sections?: ContentfulTopicSection[]
}

export interface SectionsProps {
  model?: Sections
}

export const Sections = (props: SectionsProps) => (
  <>
    {props.model?.sections?.map((section: ContentfulTopicSection, index) => (
      <TopicSection
        key={'id-' + section.sys?.id + index}
        model={{ contentfulTopicSection: section }}
      />
    ))}
  </>
)
