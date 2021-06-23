/**
 * Action model, used to render links and buttons
 * @wheelroom {@platform contentful}
 */
export type ContentfulAction = {
  sys?: {
    id: string
  }
  /**
   * @wheelroom
   *   {@type Symbol}
   *   {@helpText Voorbeeld: mijn-anchor}
   */
  anchor?: string
  /**
   * @wheelroom
   *   {@type Symbol}
   *   {@helpText Omschrijving van de actie, voor zoekmachines}
   */
  description?: string
  /** @wheelroom {@type Symbol} */
  eventId?: string
  /** @wheelroom {@type Symbol} */
  heading?: string
  /** @wheelroom {@type Symbol} */
  query?: string
  /** @wheelroom {@type Symbol} */
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
  /** @wheelroom {@type Symbol} */
  abstract?: string
  /**
   * @wheelroom
   *   {@type Array} {@arrayType Link} {@linkType ContentfulAction}
   */
  actionsCollection?: {
    items: ContentfulAction[]
  }
  /** @wheelroom {@type Symbol} */
  heading?: string
  /** @wheelroom {@type Symbol} */
  icon?: string
  /**
   * @wheelroom
   *   {@type Array} {@arrayType Link} {@linkType Asset}
   */
  mediaCollection?: {
    items: ContentfulAsset[]
  }
  /** @wheelroom {@type Link} {@linkType Asset} */
  poster?: ContentfulAsset
}
