import { AsQuery } from '@wheelroom/wheelroom'

export interface Query {
  modelName: string
  query: string
  type: AsQuery
}
export interface Options {
  defaultLocale: string
  pageTemplate: string
  queries: Query[]
}
