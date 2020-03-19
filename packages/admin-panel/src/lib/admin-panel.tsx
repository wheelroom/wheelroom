import React, { Fragment, useContext } from 'react'
import { AdminModules, AdminModule } from '@wheelroom/admin-core'
import { AdminCoreContext } from '@wheelroom/admin-core'

// TODO: Come up with a real panel ;-)

const Modules = (props: { modules: AdminModules }) => {
  const moduleList = Object.entries(props.modules).map(
    ([moduleName, module]: [string, AdminModule]) => {
      return (
        <li key={moduleName}>
          {module.heading} - {module.path}
        </li>
      )
    }
  )

  return <ul>{moduleList}</ul>
}

export const AdminPanel = () => {
  const { adminCoreState, adminCoreDispatch } = useContext(AdminCoreContext)

  const test = () => {
    console.log(adminCoreState)
    adminCoreDispatch({ type: 'SET_PAGE_PROPS', pageProps: { name: 'value' } })
  }

  return (
    <Fragment>
      <h1>Admin panel</h1>
      <p>This is a work in progress...</p>
      <Modules modules={adminCoreState.modules} />
      <button onClick={test}>test</button>
    </Fragment>
  )
}
