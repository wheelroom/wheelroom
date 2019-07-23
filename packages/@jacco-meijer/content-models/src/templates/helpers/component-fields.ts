import * as camelCaser from 'camelcase'

/** Parse comma delimited string into a sorted array of string */
export const componentFields = (fields: string) =>
  fields
    .split(',')
    .map((item: string) => camelCaser(item.trim()))
    .sort()
