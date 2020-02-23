import { ReducersMapObject } from 'redux'

export interface AdminModule {
  heading: string
  image?: any
  path: string
}

export interface AdminModuleItem extends AdminModule {
  name: string
}

export type Listener = (reducers: ReducersMapObject<any, any>) => void

export interface ReducerRegistry {
  _emitChange: any
  _reducers: ReducersMapObject<any, any>
  getReducers: () => ReducersMapObject<any, any>
  register: (name: string, reducer: any) => void
  setChangeListener: (listener: Listener) => void
}

export interface SystemState {
  version: string
}

export const GET_VERSION = 'GET_VERSION'

export interface GetVersionAction {
  type: typeof GET_VERSION
  payload: SystemState
}
export type SystemActionTypes = GetVersionAction
