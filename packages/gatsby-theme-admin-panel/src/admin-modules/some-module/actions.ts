import { SomeModuleState, COUNT_DOWN, SomeModuleActionTypes } from './types'

export function countDown(newSomeModule: SomeModuleState): SomeModuleActionTypes {
  return {
    type: COUNT_DOWN,
    payload: newSomeModule,
  }
}
