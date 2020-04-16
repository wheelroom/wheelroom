import { Li, Ul } from '../../elements/list'
import { TopicProps } from '../../../../models/topic'
import { FeatherIcon } from '../../elements/icon'
import React from 'react'
import { Action } from '../../action/action'
import { NavFooterSocialListPreset } from './presets/nav-footer-social-list-preset'
import { Wheel } from '../../types'

interface NavFooterSocialListWheel extends Wheel {
  style: NavFooterSocialListPreset
}

export const NavFooterSocialList = (props: {
  topics: TopicProps[]
  wheel: NavFooterSocialListWheel
}) => {
  return (
    <Ul is="ul" wheel={{ ...props.wheel, style: props.wheel.style }}>
      {props.topics.map((topic: TopicProps, index: number) => (
        <Li
          key={index}
          wheel={{ ...props.wheel, style: props.wheel.style.item }}
        >
          <Action
            {...topic.actions[0]}
            wheel={{ ...props.wheel, style: props.wheel.style.link }}
          >
            <FeatherIcon
              icon={topic.icon as string}
              wheel={{ ...props.wheel, style: props.wheel.style.icon }}
            />
          </Action>
        </Li>
      ))}
    </Ul>
  )
}
