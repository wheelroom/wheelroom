/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { NavigationProps } from './navigation'
import { TopicProps } from '../topic/topic'

interface NavigationFooterProps extends NavigationProps {
  /** Topics contain social icons and actions */
  topics: TopicProps[]
}

export const NavigationFooter = (props: NavigationFooterProps) => {
  return <div>Getting there {props.segments.length}</div>
}
