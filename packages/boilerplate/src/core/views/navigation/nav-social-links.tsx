import { List } from '../../elements/list'
import { TopicProps } from '../../../components/topic'
import { Action } from '../../../components/action'
import { FeatherIcon } from '../../elements/icon'
import React from 'react'
import { NcssProps } from '../../elements/types'

export interface NavSocialLinksStyleTree {
  list: NcssProps
  action: NcssProps
  icon: NcssProps
}

export const NavSocialLinks = (props: {
  topics: TopicProps[]
  styleTree: NavSocialLinksStyleTree
}) => {
  const styleTree = props.styleTree || {}
  return (
    <List is="ul" ncss={styleTree.list}>
      {props.topics.map((topic: TopicProps, index: number) => (
        <List is={'li'} key={index}>
          <Action {...topic.actions[0]} styleTree={styleTree.action}>
            <FeatherIcon ncss={styleTree.icon} icon={topic.icon as string} />
          </Action>
        </List>
      ))}
    </List>
  )
}
