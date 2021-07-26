/**
 * Action model, used to render links and buttons
 * @wheelroom
 *     {@plugin contentful} {@type testAction}
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

export const refB = 'b'
