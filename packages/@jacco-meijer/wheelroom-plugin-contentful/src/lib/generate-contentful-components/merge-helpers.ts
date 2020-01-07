import { FieldType } from '@jacco-meijer/wheelroom'

/**
 * - %firstItem%
 * - %firstComponent%
 * - %demoAsset%
 */
export const initialContentParser = (
  unparsed: string,
  field: FieldType
): string => {
  // If objects or arrays are missing in the field, the variable has been used
  // in a field where the value cannot be found. To prevent errors, supply empty
  // values by creating a safe field that has all values.
  const safeField = Object.assign(
    {},
    { items: ['not-found'], components: ['not-found'] },
    field
  )
  switch (unparsed) {
    case '%demoAsset%':
      return 'demoAsset'
    case '%firstItem%':
      return safeField.items[0]
    case '%firstComponent%':
      return safeField.components[0]
  }
  return unparsed
}

// Helper to add object or array if needed
export const createIfMissing = (
  base: any,
  key: string,
  what: 'object' | 'array'
) => {
  if (key in base) {
    return base
  } else {
    base[key] = what === 'object' ? {} : []
    return base
  }
}
