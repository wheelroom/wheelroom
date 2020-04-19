import React from 'react'
import { NavFooterSocialListItemLinkWheelStyle } from './presets/nav-footer-social-list-item-link-preset'
import { Wheel } from '../../types'
import { Action } from '../../model/action/action'
import { FeatherIcon } from '../../element/icon'
import { TopicProps } from '../../../../models/topic'

interface NavFooterSocialListItemLinkWheel extends Wheel {
  style: NavFooterSocialListItemLinkWheelStyle
}

export const NavFooterSocialListItemLink = (props: {
  topic: TopicProps
  wheel: NavFooterSocialListItemLinkWheel
}) => {
  return (
    <Action {...props.topic.actions[0]} wheel={props.wheel}>
      <FeatherIcon
        icon={props.topic.icon as string}
        wheel={{ ...props.wheel, style: props.wheel.style.icon }}
      />
    </Action>
  )
}
