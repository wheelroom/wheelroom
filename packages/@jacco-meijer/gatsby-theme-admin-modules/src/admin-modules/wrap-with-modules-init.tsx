import React, { useEffect } from 'react'
import { usePagePreview } from './page-preview/register'
import { useAdminModuleReducer } from 'gatsby-theme-admin-panel'

/** Copy page props to store for easy access in all components */
const usePageProps = (props: any) => {
  const [, adminModuleDispatch] = useAdminModuleReducer()
  useEffect(() => {
    adminModuleDispatch({
      type: 'SET_PAGE_PROPS',
      pageProps: props,
    })
  }, [props])
}

// This wrapper has the root element around and can therefore access the admin
// module provider
const Wrapper = (props: any) => {
  usePageProps(props)

  // Register all admin modules here
  usePagePreview()

  return <div>{props.children}</div>
}

export const wrapWithModulesInit = (args: any) => {
  console.log('wrapper loading')
  return <Wrapper {...args.props}>{args.element}</Wrapper>
}
