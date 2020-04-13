import { List } from '../../elements/list'
import { TopicProps } from '../../../../models/topic'
import { FeatherIcon } from '../../elements/icon'
import React from 'react'
import { Action } from '../../action/action'
import { NavFooterSocialLinksPreset } from './presets/nav-footer-social-links-preset'
import { Wheel } from '../../types'

interface NavSocialLinksWheel extends Wheel {
  style: NavFooterSocialLinksPreset
}

export const NavFooterSocialLinks = (props: {
  topics: TopicProps[]
  wheel: NavSocialLinksWheel
}) => {
  return (
    <List is="ul" wheel={{ ...props.wheel, style: props.wheel.style }}>
      {props.topics.map((topic: TopicProps, index: number) => (
        <List is={'li'} key={index} wheel={props.wheel}>
          <Action
            {...topic.actions[0]}
            wheel={{ ...props.wheel, style: props.wheel.style.action }}
          >
            <FeatherIcon
              ncss={props.wheel.style.icon}
              icon={topic.icon as string}
              wheel={props.wheel}
            />
          </Action>
        </List>
      ))}
    </List>
  )
}
