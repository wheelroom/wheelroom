import { AdminCoreState, AdminModuleState } from './types'

export const getAdminModuleState = (
  moduleId: string,
  adminCoreState: AdminCoreState
): AdminModuleState | undefined => {
  if (!(moduleId in adminCoreState.modules)) {
    return
  }
  return adminCoreState.modules[moduleId].state
}
