exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: '/admin',
    component: path.resolve('src/admin-resources/admin-panel.jsx'),
    context: {},
  })
}
