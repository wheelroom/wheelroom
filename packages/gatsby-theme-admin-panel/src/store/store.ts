import { combineReducers, createStore } from 'redux'
import { createReducerRegistry } from './create-reducer-registry'
import { createAdminModuleRegistry } from './create-admin-module-registry'

const initialState = {}
export const reducerRegistry = createReducerRegistry()
export const adminModuleRegistry = createAdminModuleRegistry()

const reducer = combineReducers(reducerRegistry.getReducers())
export const store = createStore(reducer, initialState)

// Replace the store's reducer whenever a new reducer is registered.
reducerRegistry.setChangeListener((reducers) => {
  store.replaceReducer(combineReducers(reducers))
})
