import { CreatePageQuery } from '@jacco-meijer/wheelroom'

export interface Query {
  modelName: string
  query: string
  type: CreatePageQuery
}
export interface Options {
  defaultLocale: string
  pageTemplate: string
  queries: Query[]
}
