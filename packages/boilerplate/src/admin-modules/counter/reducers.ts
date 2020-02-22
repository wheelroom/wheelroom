import { CounterState, CounterActionTypes, COUNT_UP } from './types'
import { Reducer } from 'redux'

const initialState: CounterState = {
  count: 99,
}

export const reducer: Reducer<CounterState, CounterActionTypes> = (
  state: CounterState = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case COUNT_UP: {
      return Object.assign({}, state, {
        count: state.count + 1,
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
