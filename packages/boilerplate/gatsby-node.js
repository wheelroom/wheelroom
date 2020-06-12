/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: '/admin',
    component: path.resolve('src/admin-resources/admin-panel.jsx'),
    context: {},
  })
}
