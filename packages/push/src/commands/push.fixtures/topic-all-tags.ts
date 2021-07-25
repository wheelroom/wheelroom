/**
 * Something about this model, used as model description
 * @wheelroom
 *   {@plugin contentful} {@type topic}
 * @see https://www.wheelroom.io
 */
export interface Topic {
  /**
   * Some text here that we do nothing with
   * @wheelroom
   *   {@helpText The topic heading}
   *   {@localized true}
   *   {@name Heading}
   *   {@required true}
   *   {@type Array}
   *   {@linkType Symbol}
   *   {@itemsType Link}
   *   {@itemsLinkType Entry}
   *   {@validation unique}
   *   {@widget singleLine}
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
