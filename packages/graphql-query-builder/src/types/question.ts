/**
 * Main interface used to call the querey builder
 */
export interface Question {
  fields: Fields
  operationName?: string
  operationType?: 'query' | 'mutation' | 'subscription'
}

/**
 * Options that can be used for formatting fields
 */
export interface Field {
  /** Adds a field alias */
  alias?: string
  /** Adds field arguments */
  arguments?: {
    [argumentName: string]: string
  }
  /** Adds a field diretive */
  directive?: Directive
  /** Adds sub fields for this field */
  fields?: Fields
  /** Adds spread operator to this field */
  fragment?: boolean
  /** Adds spread operator 'on' to this field */
  inlineFragment?: boolean
}

export interface Fields {
  [fieldName: string]: Field
}

export interface Directive {
  name: string
  value: string
}
