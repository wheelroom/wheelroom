import React, { Fragment } from 'react'
import { Wheel } from '../../types'
import { NavFooterSocialListItemWheelStyle } from './presets/nav-footer-social-list-item-preset'
import { NavFooterSocialListItemLink } from './nav-footer-social-list-item-link'
import { Li } from '../../element/self'
import { TopicProps } from '../../../../models/topic'

interface NavFooterSocialListItemWheel extends Wheel {
  style: NavFooterSocialListItemWheelStyle
}

export interface NavFooterSocialListItemProps {
  topics: TopicProps[]
  wheel: NavFooterSocialListItemWheel
}

export const NavFooterSocialListItem = (
  props: NavFooterSocialListItemProps
) => {
  const socialListItemlink = props.topics.map(
    (topic: TopicProps, index: number) => (
      <Li key={index} wheel={props.wheel}>
        <NavFooterSocialListItemLink
          topic={topic}
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        />
      </Li>
    )
  )
  return <Fragment>{socialListItemlink}</Fragment>
}
