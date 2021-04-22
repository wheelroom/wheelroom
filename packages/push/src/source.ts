// @see https://github.com/contentful/contentful-management.js/blob/master/lib/entities/field-type.ts
type FieldType =
  | { type: 'Symbol' }
  | { type: 'Text' }
  | { type: 'RichText' }
  | { type: 'Integer' }
  | { type: 'Number' }
  | { type: 'Date' }
  | { type: 'Boolean' }
  | { type: 'Object' }
  | { type: 'Location' }
  | { type: 'Link'; linkType: 'Asset' }
  | { type: 'Link'; linkType: 'Entry' }
  | { type: 'Array'; items: { type: 'Symbol' } }
  | { type: 'Array'; items: { type: 'Link'; linkType: 'Entry' } }
  | { type: 'Array'; items: { type: 'Link'; linkType: 'Asset' } }

// @see https://github.com/contentful/contentful-management.js/blob/master/lib/entities/content-type-fields.ts
interface Item {
  type: string
  linkType?: string
  // validations?: ContentTypeFieldValidation[]
}

interface ContentFields extends Item {
  id: string
  name: string
  required: boolean
  localized: boolean
  disabled?: boolean
  omitted?: boolean
  deleted?: boolean
  items?: Item
  apiName?: string
}

export type Variant = 'external 1' | 'external 2' | 'external 3'

/** @platform contentful */
export interface Topic {
  /** @platformType Symbol - Topic heading */
  heading: string
  /** @platformType Text - Topic heading */
  abstract: string
  /**
   * Topic variant
   * @platformType Symbol - what happens
   */
  variant: Variant
  /** @platformType Symbol - Another variant */
  otherVariant: 'variant 1' | 'variant 2' | 'variant 3'
}

const defaultTopic: Topic = {
  heading: 'default heading',
  abstract: 'default abstract',
  variant: 'external 1',
  otherVariant: 'variant 1',
}

// Where to define the editor config for each field?
const contentFieldsTopicHeading: ContentFields = {
  id: 'heading',
  type: 'Symbol',
  name: 'heading',
  required: false,
  localized: false,
  items: { type: 'Symbol' }, // Where to put the actual drop down items?
}
