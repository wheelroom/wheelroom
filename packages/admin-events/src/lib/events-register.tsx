import { RegisterModule } from '@wheelroom/admin-core'

/**
 * Action payload dispatched to admin core store. Register this module. Before
 * registering, the module.store value is provide with a React reducer.
 *
 */
export const eventsRegister: RegisterModule = {
  type: 'REGISTER_MODULE',
  moduleId: 'events',
  module: {
    heading: 'Events admin module',
    options: {},
    order: 1,
    path: '/admin/events',
  },
}
