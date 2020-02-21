import { SomeModuleState, SomeModuleActionTypes, COUNT_DOWN } from './types'

export const someModuleInitialState: SomeModuleState = {
  count: 45,
}

export const someModuleReducer = (
  state: SomeModuleState = someModuleInitialState,
  action: SomeModuleActionTypes
): SomeModuleState => {
  switch (action.type) {
    case COUNT_DOWN: {
      return Object.assign({}, state, {
        count: state.count - 1,
      })
      // return {
      //   ...state,
      //   ...action.payload,
      // }
    }
    default:
      return state
  }
}
