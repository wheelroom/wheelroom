import { ActionTypes, State } from './types'
import { Reducer } from 'react'

// const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj))

export const mainReducer: Reducer<State, ActionTypes> = (
  state: State,
  action: ActionTypes
): State => {
  switch (action.type) {
    case 'REGISTER_MODULE':
      return {
        ...state,
        modules: {
          ...state.modules,
          [action.moduleId]: action.module,
        },
      }

    case 'SET_PAGE_PROPS':
      return {
        ...state,
        pageProps: action.pageProps,
      }

    default:
      return state
  }
}
