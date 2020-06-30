/* eslint-disable @typescript-eslint/ban-types */

/**
 *
 * export const partialStyle: DeepPartial<TopicNcssTree> = {
 *   link: {
 *     ncss: {
 *       label: 'topic-link',
 *       m: 1,
 *     },
 *   },
 * }
 *
 */

export type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T
