import { ActionTypes, State } from './types'
import { Reducer } from 'react'

// const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj))

export const mainReducer: Reducer<State, ActionTypes> = (
  state: State,
  action: ActionTypes
): State => {
  switch (action.type) {
    case 'REGISTER_MODULE':
      state.modules[action.moduleId] = action.module
      return state

    case 'SET_PAGE_PROPS':
      state.pageProps = action.pageProps
      return state

    default:
      return state
  }
}
