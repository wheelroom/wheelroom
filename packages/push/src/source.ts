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
