export interface CounterState {
  count: number
}

export const COUNT_UP = 'COUNT_UP'
export interface CountUpAction {
  type: typeof COUNT_UP
  payload: CounterState
}
export type CounterActionTypes = CountUpAction
