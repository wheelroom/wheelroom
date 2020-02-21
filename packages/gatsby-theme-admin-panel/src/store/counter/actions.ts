import { CounterState, COUNT_UP, CounterActionTypes } from './types'

export function countUp(newCounter: CounterState): CounterActionTypes {
  return {
    type: COUNT_UP,
    payload: newCounter,
  }
}
