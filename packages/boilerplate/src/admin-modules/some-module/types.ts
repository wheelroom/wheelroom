export interface SomeModuleState {
  count: number
}

export const COUNT_DOWN = 'COUNT_DOWN'
export interface CountUpAction {
  type: typeof COUNT_DOWN
  payload: SomeModuleState
}
export type SomeModuleActionTypes = CountUpAction
