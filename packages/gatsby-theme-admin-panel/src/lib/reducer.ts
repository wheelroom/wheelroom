import { ActionTypes, State } from './types'
import { adminModuleRegistry } from './create-admin-module-registry'
import { Reducer } from 'react'

const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj))

export const mainReducer: Reducer<State, ActionTypes> = (
  state: State,
  action: ActionTypes
): State => {
  let modules
  switch (action.type) {
    case 'REGISTER_MODULE':
      modules = adminModuleRegistry.register(action.moduleId, action.module)
      return {
        ...state,
        modules,
      }

    case 'UPDATE_MODULE_DATA':
      modules = adminModuleRegistry.getAdminModules()
      modules[action.moduleId].data = deepCopy(action.moduleData)
      return {
        ...state,
        modules,
      }

    default:
      return state
  }
}
