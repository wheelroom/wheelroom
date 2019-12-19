import * as camelCaser from 'camelcase'

/** Parse comma delimited string into a sorted array of string */
export const componentFields = (fields) =>
  fields
    .split(',')
    .map((item) => camelCaser(item.trim()))
    .sort()
