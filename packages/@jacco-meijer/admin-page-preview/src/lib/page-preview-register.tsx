import { RegisterModule } from '@jacco-meijer/admin-core'

/**
 * Action payload dispatched to admin core store. Register this module. Before
 * registering, the module.store value is provide with a React reducer.
 *
 */
export const pagePreviewRegister: RegisterModule = {
  type: 'REGISTER_MODULE',
  moduleId: 'pagePreview',
  module: {
    heading: 'Page preview admin module',
    options: {},
    order: 1,
    path: '/admin/page-preview',
  },
}
