import { replaceAll, WheelroomField } from '@jacco-meijer/wheelroom'

/**
 * - %firstItem%
 * - %firstComponent%
 * - %singleComponent%
 * - %demoAsset%
 */
export const initialContentParser = (
  unparsed: string,
  field: WheelroomField
): string => {
  // If objects or arrays are missing in the field, the variable has been used
  // in a field where the value cannot be found. To prevent errors, supply empty
  // values by creating a safe field that has all values.
  const safeField = Object.assign(
    {},
    { items: ['not-found'], components: ['not-found'], component: 'not-found' },
    field
  )
  let parsed = unparsed
  parsed = replaceAll(parsed, '%demoAsset%', 'demoAsset')
  parsed = replaceAll(parsed, '%firstItem%', safeField.items[0])
  parsed = replaceAll(parsed, '%firstComponent%', safeField.components[0])
  parsed = replaceAll(parsed, '%singleComponent%', safeField.component)
  return parsed
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
