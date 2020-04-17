import React from 'react'
import { Ul } from '../../elements/list'
import { TopicProps } from '../../../../models/topic'
import { NavFooterSocialListPreset } from './presets/nav-footer-social-list-preset'
import { Wheel } from '../../types'
import { NavFooterSocialListItem } from './nav-footer-social-list-item'

interface NavFooterSocialListWheel extends Wheel {
  style: NavFooterSocialListPreset
}

export const NavFooterSocialList = (props: {
  topics: TopicProps[]
  wheel: NavFooterSocialListWheel
}) => {
  return (
    <Ul wheel={props.wheel}>
      <NavFooterSocialListItem
        topics={props.topics}
        wheel={{ ...props.wheel, style: props.wheel.style.item }}
      />
    </Ul>
  )
}
