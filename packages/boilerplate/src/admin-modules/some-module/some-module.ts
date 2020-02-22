import { reducerRegistry } from 'gatsby-theme-admin-panel'
import { reducer } from './reducers'

export const someModuleinit = () => {
  reducerRegistry.register('someModule', reducer)
}
