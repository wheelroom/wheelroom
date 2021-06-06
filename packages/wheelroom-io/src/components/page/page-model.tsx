import { TopicSection } from '../topic-section/topic-section'

export type Page = {
  sectionsCollection: {
    items: TopicSection[]
  }
}

export type PageQuery = {
  contentful: {
    page: Page
    globals: any
  }
  site: any
}
