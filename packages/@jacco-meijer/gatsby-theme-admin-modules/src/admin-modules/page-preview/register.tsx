import { RegisterModule } from 'gatsby-theme-admin-panel'

export const registerPagePreview: RegisterModule = {
  type: 'REGISTER_MODULE',
  moduleId: 'pagePreview',
  module: {
    heading: 'Page preview admin module',
    options: {},
    order: 1,
    path: '/admin/page-preview',
  },
}
