import { graphql } from 'gatsby'
import { Page } from '../page/page'
import { IconVariant } from '../icon/icon'

export type ContentfulAction = {
  sys?: {
    id: string
  }
  anchor?: string
  description?: string
  eventId?: string
  heading?: string
  icon?: IconVariant
  page?: Page
  query?: string
  url?: string
}

export const actionFragment = graphql`
  fragment Action on Contentful_Action {
    sys {
      id
    }
    description
    anchor
    eventId
    heading
    icon
    page {
      path
    }
    query
    url
  }
`
