import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducers'
import { createStore as reduxCreateStore } from 'redux'
import { counterInitialState } from './counter/reducers'

const rootReducer = combineReducers({
  counter: counterReducer,
})

const initialState = {
  counter: counterInitialState,
}

export type RootState = ReturnType<typeof rootReducer>
export const createStore = () => reduxCreateStore(rootReducer, initialState)
