/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { NavigationProps } from './navigation'
import { TopicProps } from '../topic/topic'
import { GlobalsProps } from '../globals/globals'
import { SiteMetadata } from '../../page-template'

interface NavigationFooterProps extends NavigationProps {
  /** Topics contain social icons and actions */
  topics: TopicProps[]
  /** Site metadata defined in gatsby-config */
  siteMetadata: SiteMetadata
  /** Site globals from CMS */
  globals: GlobalsProps
}

export const NavigationFooter = (props: NavigationFooterProps) => {
  return (
    <div>
      Getting there:
      <br />
      {props.topics[0].heading}
      <br />
      {props.siteMetadata.siteInfo}
      <br />
    </div>
  )
}
