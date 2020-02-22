import { reducerRegistry } from 'gatsby-theme-admin-panel'
import { reducer } from './reducers'

export const counterInit = () => {
  reducerRegistry.register('counter', reducer)
}
