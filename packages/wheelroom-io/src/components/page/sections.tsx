import { Div, H1, P } from '@wheelroom/any/elements'
import { TopicSection } from '../topic-section/topic-section'

export type Sections = TopicSection

export interface SectionsProps {
  sections: Sections[]
}

export const Sections = (props: SectionsProps) => (
  <>
    {props.sections.map((section: TopicSection) => (
      <Div key={section.sys.id}>
        {section.topicsCollection.items.map((topic) => (
          <Div key={topic.sys.id}>
            <H1>{topic.heading}</H1>
            <P>{topic.abstract}</P>
          </Div>
        ))}
      </Div>
    ))}
  </>
)
