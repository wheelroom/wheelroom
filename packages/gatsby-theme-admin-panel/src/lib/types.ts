export interface AdminModule {
  /** Mutable data space for each module */
  data: any
  /** Heading used in admin panel */
  heading: string
  /** Image used in admin panel */
  image?: any
  /** Immutable options set when module is registered */
  options: any
  /** Order in admin panel */
  order: number
  /** Path app routes to when module is clicked in admin panel */
  path: string
}

export interface AdminModules {
  [adminModuleId: string]: AdminModule
}

export interface BaseAction {
  type: string
}

export interface RegisterModuleAction extends BaseAction {
  type: 'REGISTER_MODULE'
  moduleId: string
  module: AdminModule
}

export interface UpdateModuleData extends BaseAction {
  type: 'UPDATE_MODULE_DATA'
  moduleId: string
  moduleData: any
}

export type ActionTypes = RegisterModuleAction | UpdateModuleData

export interface State {
  modules: AdminModules
}
