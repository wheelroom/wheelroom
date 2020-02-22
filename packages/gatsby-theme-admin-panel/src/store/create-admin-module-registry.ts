export interface AdminModule {
  backgroundColor: string
  heading: string
  name?: string
  path: string
}

export interface AdminModuleRegistry {
  _adminModules: AdminModule[]
  getAdminModules: () => AdminModule[]
  register: (name: string, adminModule: AdminModule) => void
}

export const createAdminModuleRegistry = (): AdminModuleRegistry => {
  const adminModuleRegistry: AdminModuleRegistry = {
    _adminModules: [],
    getAdminModules() {
      return this._adminModules
    },
    register(name, adminModule) {
      adminModule.name = name
      this._adminModules.push(adminModule)
    },
  }
  return adminModuleRegistry
}
