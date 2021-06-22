export type ContentfulAction = {
  sys?: {
    id: string
  }
  anchor?: string
  description?: string
  eventId?: string
  heading?: string
  query?: string
  url?: string
}

export type ContentfulAsset = {
  sys: {
    id: string
  }
  contentType: string
  description: string
  fileName: string
  height: number
  size: number
  title: string
  url: string
  width: number
}

export type ContentfulTopic = {
  sys?: {
    id: string
  }
  abstract?: string
  actionsCollection?: {
    items: ContentfulAction[]
  }
  heading?: string
  icon?: string
  mediaCollection?: {
    items: ContentfulAsset[]
  }
  poster?: ContentfulAsset
}
