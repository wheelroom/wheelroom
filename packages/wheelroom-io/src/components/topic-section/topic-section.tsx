import { Topic } from '../topic/topic'

export type TopicSection = {
  variation: string
  topicsCollection: {
    items: Topic[]
  }
  sys: {
    id: string
  }
}
