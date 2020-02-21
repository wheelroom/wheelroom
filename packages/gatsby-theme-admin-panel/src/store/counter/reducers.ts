import { CounterState, CounterActionTypes, COUNT_UP } from './types'

export const counterInitialState: CounterState = {
  count: 99,
}

export const counterReducer = (
  state: CounterState = counterInitialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case COUNT_UP: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
