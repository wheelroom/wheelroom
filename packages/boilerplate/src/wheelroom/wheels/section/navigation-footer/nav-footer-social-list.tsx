import React from 'react'
import { Ul } from '../../element/self'
import { TopicProps } from '../../../../models/topic'
import { NavFooterSocialListWheelStyle } from './presets/nav-footer-social-list-preset'
import { Wheel } from '../../types'
import { NavFooterSocialListItem } from './nav-footer-social-list-item'

interface NavFooterSocialListWheel extends Wheel {
  style: NavFooterSocialListWheelStyle
}

export const NavFooterSocialList = (props: {
  topics: TopicProps[]
  wheel: NavFooterSocialListWheel
}) => {
  return (
    <Ul wheel={props.wheel}>
      <NavFooterSocialListItem
        topics={props.topics}
        wheel={{ ...props.wheel, style: props.wheel.style.listItem }}
      />
    </Ul>
  )
}
