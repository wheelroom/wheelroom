import { reducerRegistry, adminModuleRegistry } from 'gatsby-theme-admin-panel'
import { reducer } from './reducers'

export const counterInit = () => {
  reducerRegistry.register('counter', reducer)
  adminModuleRegistry.register('counter', {
    backgroundColor: '#3dd',
    heading: 'Counter admin module',
    path: '/admin/counter',
  })
}
