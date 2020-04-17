import React from 'react'
import { NavFooterSocialListItemLinkPreset } from './presets/nav-footer-social-list-item-link-preset'
import { Wheel } from '../../types'
import { Action } from '../../action/action'
import { FeatherIcon } from '../../elements/icon'
import { TopicProps } from '../../../../models/topic'

interface NavFooterSocialListItemLinkWheel extends Wheel {
  style: NavFooterSocialListItemLinkPreset
}

export const NavFooterSocialListItemLink = (props: {
  topic: TopicProps
  wheel: NavFooterSocialListItemLinkWheel
}) => {
  console.log(props.topic.actions)
  return (
    <Action
      {...props.topic.actions[0]}
      wheel={{ ...props.wheel, style: props.wheel.style }}
    >
      <FeatherIcon
        icon={props.topic.icon as string}
        wheel={{ ...props.wheel, style: props.wheel.style.icon }}
      />
    </Action>
  )
}
