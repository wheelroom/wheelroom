// @see https://github.com/contentful/contentful-management.js/blob/master/lib/entities/field-type.ts
export type FieldType =
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

export interface ContentFields extends Item {
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
  /** {shortString} Topic heading */
  heading: string
  /** {longString} Topic abstract */
  abstract: string
  /** {arrayType} Topic variant */
  variant: Variant
  /** {anotherType} Topic variant */
  otherVariant: 'variant 1' | 'variant 2' | 'variant 3'
}
