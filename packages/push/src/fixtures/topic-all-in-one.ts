/**
 * Action model, used to render links and buttons
 * @wheelroom {@plugin contentful}
 */
export interface ContentfulAction {
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

export interface ContentfulAsset {
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

/**
 * Topic model, a heading, an abstract and a call to action
 * @wheelroom {@plugin contentful}
 */
export interface ContentfulTopic {
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
