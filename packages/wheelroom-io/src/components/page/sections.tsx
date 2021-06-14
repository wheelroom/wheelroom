import { TopicSection } from '../topic-section/topic-section'

export type Sections = TopicSection

export interface SectionsProps {
  models: Sections[]
}

export const Sections = (props: SectionsProps) => (
  <>
    {props.models.map((model: TopicSection, index) => (
      <TopicSection key={'id-' + model.sys?.id + index} model={model} />
    ))}
  </>
)
