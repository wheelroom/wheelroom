import React, { Fragment } from 'react'
import { TopicProps } from '../../topic'

export interface HeadlineProps {
  topic: TopicProps
}

export const Headline = (props: HeadlineProps) => {
  return (
    <Fragment>
      <h1>WIP - HEADLINE HERE: {props.topic.heading}</h1>
      <p>{props.topic.abstract && props.topic.abstract.abstract}</p>
    </Fragment>
  )
}
