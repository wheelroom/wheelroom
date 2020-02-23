import { ReducerRegistry } from "./types"

export const createReducerRegistry = (): ReducerRegistry => {
  const reducerRegistry: ReducerRegistry = {
    _reducers: {},
    getReducers() {
      return this._reducers
    },
    register(name, reducer) {
      this._reducers[name] = reducer
    },
  }
  return reducerRegistry
}
