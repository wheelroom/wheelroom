import { reducerRegistry, adminModuleRegistry, AdminModule } from 'gatsby-theme-admin-panel'
import { reducer } from './reducers'

export const counterInit = () => {
  reducerRegistry.register('counter', reducer)
  adminModuleRegistry.register('counter', {
    heading: 'Counter admin module',
    path: '/admin/counter',
  } as AdminModule)
}
