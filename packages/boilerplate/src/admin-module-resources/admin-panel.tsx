import React from 'react'
import { Box, Flex } from '../views/core-elements/grid'
import {
  useAdminModuleReducer,
  AdminModules,
  AdminModule,
} from 'gatsby-theme-admin-panel'

// TODO: Finish panel

const Modules = (props: { modules: AdminModules }) => {
  const moduleList = Object.entries(props.modules).map(
    ([moduleName, module]: [string, AdminModule]) => {
      return (
        <Box
          key={moduleName}
          ncss={{
            color: 'white',
            bg: '#66f',
            fontFamily: 'text',
            p: 4,
            w: 1 / 3,
          }}
        >
          <b>{moduleName}</b>
          <br />
          {module.heading}
          <br />
          {module.path}
          <br />
        </Box>
      )
    }
  )

  return <Flex>{moduleList}</Flex>
}

const AdminPanel = (props: any) => {
  const [adminModuleState] = useAdminModuleReducer()

  return (
    <Box
      ncss={{
        bg: '#ddd',
        h: '100vh',
      }}
    >
      <Modules modules={adminModuleState.modules} />
    </Box>
  )
}

export default AdminPanel
