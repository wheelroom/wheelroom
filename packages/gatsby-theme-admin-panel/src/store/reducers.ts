import { SystemState, SystemActionTypes, GET_VERSION } from './types'
import { Reducer } from 'redux'

const initialState: SystemState = {
  version: '1.0.0',
}

export const systemReducer: Reducer<SystemState, SystemActionTypes> = (
  state: SystemState = initialState,
  action: SystemActionTypes
): SystemState => {
  switch (action.type) {
    case GET_VERSION: {
      return Object.assign({}, state)
    }
    default:
      return state
  }
}
