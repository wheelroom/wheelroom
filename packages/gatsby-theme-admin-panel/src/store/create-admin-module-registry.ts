import { AdminModuleItem, AdminModule } from "./types"

export interface AdminModuleRegistry {
  _adminModules: AdminModuleItem[]
  getAdminModules: () => AdminModuleItem[]
  register: (name: string, adminModule: AdminModule) => void
}

export const createAdminModuleRegistry = (): AdminModuleRegistry => {
  const adminModuleRegistry: AdminModuleRegistry = {
    _adminModules: [],
    getAdminModules() {
      return this._adminModules
    },
    register(name, adminModule) {
      const adminModuleItem: AdminModuleItem = {...adminModule, name}
      this._adminModules.push(adminModuleItem)
    },
  }
  return adminModuleRegistry
}
