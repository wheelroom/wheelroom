# gatsby-theme-admin-panel

Draft architecture of this module.

## This package

- admin panel installs by wrapping the Gatsby root element with a Redux store
- adds registerAdminModule functionality to store
- adds route that displays admin modules
- customization:
  - admin panel title
  - panel fg/bg color
  - admin route, defaults to /admin

## Admin module packages

- admin modules are separate npm packages
- admin modules load as gatsby themes
- admin modules register by wrapping the page element
- a admin module specifies
  - module id
  - tile title
  - tile image
  - tile color
  - redux reducer
  - path
- admin modules add redux dispatch messages that can be used in the app
- admin modules have access to page props

## Example admin modules

- @wheelroom/admin-panel-login
  - id: login
  - path: /admin/login
- @wheelroom/admin-panel-contentful-page-preview
  - id: contentfulPagePreview
  - path: /admin/contentful-page-preview
- @wheelroom/admin-panel-amplify-analytics
  - id: amplifyAnalytics
  - path: /admin/amplify-analytics

