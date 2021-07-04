import { ScopeCollection } from '../collection/scope'

export type Context = {
  collections: {
    scope: {
      getByName: (names: string[]) => ScopeCollection[]
    }
  }
}
