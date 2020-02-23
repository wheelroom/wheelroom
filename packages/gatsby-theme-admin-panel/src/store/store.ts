import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createReducerRegistry } from './create-reducer-registry'
import { createAdminModuleRegistry } from './create-admin-module-registry'
import { systemReducer } from './reducers'
import thunkMiddleware from 'redux-thunk'

const initialState = {}
export const reducerRegistry = createReducerRegistry()
export const adminModuleRegistry = createAdminModuleRegistry()

// Define at least one action so that Redux does not complain
reducerRegistry.register('system', systemReducer)

const reducer = combineReducers(reducerRegistry.getReducers())
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware)
)

// Replace the store's reducer whenever a new reducer is registered.
reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combineReducers(reducers))
})
