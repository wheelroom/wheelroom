import { RegisterModuleAction } from 'gatsby-theme-admin-panel'

export const registerPagePreview: RegisterModuleAction = {
  type: 'REGISTER_MODULE',
  moduleId: 'pagePreview',
  module: {
    data: {},
    heading: 'Page preview admin module',
    options: {},
    order: 1,
    path: '/admin/page-preview',
  },
}
