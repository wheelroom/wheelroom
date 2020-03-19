import { AdminCoreState, AdminModuleStore } from './types'

export const getAdminModuleStore = (
  moduleId: string,
  adminCoreState: AdminCoreState
): AdminModuleStore | undefined => {
  if (!(moduleId in adminCoreState.modules)) {
    return
  }
  return adminCoreState.modules[moduleId].store
}
