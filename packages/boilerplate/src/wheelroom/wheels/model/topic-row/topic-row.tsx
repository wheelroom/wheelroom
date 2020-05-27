/** @jsx jsx */
import { jsx } from '@emotion/core'
import { NcssProps, Wheel } from '../../types'
import { TopicProps } from '../../../../models/topic'
import { ActionProps } from '../../../../models/action'

export interface TopicRowStyle extends Wheel {
  ncss: NcssProps
}

export interface TopicRowProps {
  /** Styling wheel */
  wheel: Wheel
  /** Topic Row props */
  heading: string
  abstract: {
    abstract: string
  }
  icon: string | JSX.Element
  actions: ActionProps[]
  topics: TopicProps[]
}

export const TopicRow = (props: TopicRowProps) => {
  if (!props.topics) {
    return null
  }

  return (
    <tr>
      <th>
        <dl>
          <dt>{props.heading}</dt>
          <dd>{props.abstract?.abstract}</dd>
        </dl>
      </th>
      {props.topics.map((topic: TopicProps, index: number) => {
        return (
          <td key={index}>
            <p>{topic.heading}</p>
            <p>{topic.abstract.abstract}</p>
          </td>
        )
      })}
    </tr>
  )
}
