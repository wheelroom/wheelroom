import { Field as WheelroomField } from '@jacco-meijer/wheelroom'

/**
 * - %firstInValidation%
 * - %firstlinkContentTypeValidation%
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
    { items: ['not-found'], components: ['not-found'] },
    field
  )
  let parsed = unparsed
  parsed = replaceAll(parsed, '%demoAsset%', 'demoAsset')
  parsed = replaceAll(parsed, '%firstInValidation%', safeField.items[0])
  parsed = replaceAll(
    parsed,
    '%firstlinkContentTypeValidation%',
    safeField.components[0]
  )
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
export const escapeRegExp = (str: string) => {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}
const replaceAll = (str: string, find: string, replace: string) => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
}
