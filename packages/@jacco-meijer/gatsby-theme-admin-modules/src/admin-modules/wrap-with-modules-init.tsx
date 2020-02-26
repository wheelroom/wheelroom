import React, {  } from 'react'
import { ModulesInit } from './page-preview/modules-init'

// This wrapper has the root element around and can therefore access the admin
// module provider
export const wrapWithModulesInit = (args: any) => {
  console.log('render: page wrapper')
  return <ModulesInit {...args.props}>{args.element}</ModulesInit>
}
