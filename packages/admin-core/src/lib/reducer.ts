import { ActionTypes, AdminCoreState } from './types'
import { Reducer } from 'react'

// const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj))

export const mainReducer: Reducer<AdminCoreState, ActionTypes> = (
  state: AdminCoreState,
  action: ActionTypes
): AdminCoreState => {
  // console.log('REDUCER: admin core', action)
  switch (action.type) {
    case 'REGISTER_MODULE':
      return {
        ...state,
        modules: {
          ...state.modules,
          [action.moduleId]: action.module,
        },
      }

    case 'SET_ADMIN_MODULE_STORE':
      return {
        ...state,
        modules: {
          ...state.modules,
          [action.moduleId]: {
            ...state.modules[action.moduleId],
            store: action.store,
          },
        },
      }

    case 'SET_PAGE_PROPS':
      return {
        ...state,
        pageProps: action.pageProps,
      }

    case 'SET_LAST_MODULE_ID':
      return {
        ...state,
        lastModuleId: action.moduleId,
      }

    default:
      return state
  }
}
