import { ReducerRegistry } from "./types"

/**
 * As described here:
 * http://nicolasgallagher.com/redux-modules-and-code-splitting/
 * 
 */


export const createReducerRegistry = (): ReducerRegistry => {
  const reducerRegistry: ReducerRegistry = {
    _emitChange: null,
    _reducers: {},
    getReducers() {
      return { ...this._reducers }
    },
    register(name, reducer) {
      this._reducers = { ...this._reducers, [name]: reducer }
      if (this._emitChange) {
        this._emitChange(this.getReducers())
      }
    },
    setChangeListener(listener) {
      this._emitChange = listener
    },
  }
  return reducerRegistry
}
