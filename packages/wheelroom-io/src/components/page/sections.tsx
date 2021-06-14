import { TopicSection } from '../topic-section/topic-section'

export type Sections = TopicSection

export interface SectionsProps {
  models: Sections[]
}

export const Sections = (props: SectionsProps) => (
  <>
    {props.models.map((model: TopicSection) => (
      <TopicSection key={model.sys?.id} model={model} />
    ))}
  </>
)
