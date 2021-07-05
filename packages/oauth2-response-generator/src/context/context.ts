import Express from 'express'
import { ClientCollection } from '../collection/client'
import { ScopeCollection } from '../collection/scope'

export type Context = {
  req: Express.Request
  collections: {
    scope: {
      getByName: (names: string[]) => ScopeCollection[]
    }
    client: {
      getById: (id: string) => ClientCollection
    }
  }
}
