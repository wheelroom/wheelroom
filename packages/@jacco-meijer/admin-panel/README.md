# gatsby-theme-admin-panel

Draft architecture of this package.

## This package

- admin panel installs by wrapping the Gatsby root element with a Redux store
- adds registerAdminModule functionality to store
- adds route that displays admin modules
- customization by changing admin-panel template
- reducerRegistry allows for admin modules to add reducers
- adminModuleRegistry allows for admin modules to register:
  - name
  - heading
  - image
  - path
- admin modules are added as npm modules, either as gatsby theme or as a plain
  module

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

