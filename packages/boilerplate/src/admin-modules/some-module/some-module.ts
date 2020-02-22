import { reducerRegistry, adminModuleRegistry } from 'gatsby-theme-admin-panel'
import { reducer } from './reducers'

export const someModuleinit = () => {
  reducerRegistry.register('someModule', reducer)
  adminModuleRegistry.register('someModule', {
    backgroundColor: '#3dd',
    heading: 'Some admin module',
    path: '/admin/some-module',
  })
}
