/**
 * As described here:
 * http://nicolasgallagher.com/redux-modules-and-code-splitting/
 * 
 */

import { ReducersMapObject } from 'redux'

type Listener = (reducers: ReducersMapObject<any, any>) => void

export interface ReducerRegistry {
  _emitChange: any
  _reducers: ReducersMapObject<any, any>
  getReducers: () => ReducersMapObject<any, any>
  register: (name: string, reducer: any) => void
  setChangeListener: (listener: Listener) => void
}

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
