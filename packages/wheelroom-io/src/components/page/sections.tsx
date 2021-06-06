import { TopicSection } from '../topic-section/topic-section'

export type Sections = TopicSection

export interface SectionsProps {
  sections: Sections[]
}

export const Sections = (props: SectionsProps) => (
  <>
    {props.sections.map((section: TopicSection) => (
      <TopicSection key={section.sys.id} section={section} />
    ))}
  </>
)
