import React from 'react'
import { Box } from '../views/core-elements/grid'
import { adminModuleRegistry } from 'gatsby-theme-admin-panel'

const AdminPanel = (props: any) => {
  const modulesBefore = adminModuleRegistry.getAdminModules()
  console.log('modulesBefore', modulesBefore)

  return (
    <Box
      ncss={{
        bg: '#ddd',
        h: 5,
      }}
    >
      Admin panel
    </Box>
  )
}

export default AdminPanel
