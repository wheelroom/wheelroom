import { RegisterModule } from '@wheelroom/admin-core'

/**
 * Action payload dispatched to admin core store. Register this module. Before
 * registering, the module.store value is provide with a React reducer.
 *
 */
export const themeSwitcherRegister: RegisterModule = {
  type: 'REGISTER_MODULE',
  moduleId: 'themeSwitcher',
  module: {
    heading: 'Theme switcher',
    options: {},
    order: 1,
    path: '/admin/theme-switcher',
  },
}
