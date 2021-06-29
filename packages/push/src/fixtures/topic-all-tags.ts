/**
 * Something about this model, used as model description
 * @wheelroom {@plugin contentful}
 * @see https://www.wheelroom.io
 */
export interface Topic {
  /**
   * Some text here that we do nothing with
   * @wheelroom
   *   {@name Heading}
   *   {@type Symbol}
   *   {@widget singleLine}
   *   {@required} {@localized}
   *   {@validation unique}
   *   {@helpText The topic heading}
   * @defaultValue Default heading
   *
   */
  heading: string
  /**
   * This is the abstract
   */
  abstract: string
  /**
   * This is the variant
   */
  variant: any
}
