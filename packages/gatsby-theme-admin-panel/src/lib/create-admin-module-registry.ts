import { AdminModules, AdminModule } from './types'

const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj))

export interface AdminModuleRegistry {
  _adminModules: AdminModules
  getAdminModules: () => AdminModules
  register: (adminModuleId: string, adminModule: AdminModule) => AdminModules
}

export const createAdminModuleRegistry = (): AdminModuleRegistry => {
  const adminModuleRegistry: AdminModuleRegistry = {
    _adminModules: {},
    getAdminModules() {
      return deepCopy(this._adminModules)
    },
    register(adminModuleId, adminModule) {
      const modulesCopy = deepCopy(this._adminModules)
      modulesCopy[adminModuleId] = adminModule
      this._adminModules = modulesCopy
      return modulesCopy
    },
  }
  return adminModuleRegistry
}

export const adminModuleRegistry = createAdminModuleRegistry()
