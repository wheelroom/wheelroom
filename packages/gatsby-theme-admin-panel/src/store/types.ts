export interface AdminModule {
  heading: string
  image?: any
  path: string
}

export interface AdminModuleItem extends AdminModule {
  name: string
}

export interface Reducers {
  [reducerId: string]: any
}

export interface ReducerRegistry {
  _reducers: Reducers
  getReducers: () => Reducers
  register: (name: string, reducer: any) => void
}
