import React, { Fragment } from 'react'
import { Any } from '../../elements/any'
import { PageProps } from '../../../../models/page'
import { Wheel } from '../../types'
import { NavHeaderListItemPreset } from './presets/nav-header-list-item-preset'
import { NavHeaderListItemLink } from './nav-header-list-item-link'

interface NavHeaderListItemWheel extends Wheel {
  style: NavHeaderListItemPreset
}

export interface NavHeaderListItemProps {
  pages: PageProps[]
  wheel: NavHeaderListItemWheel
}

export const NavHeaderListItem = (props: NavHeaderListItemProps) => {
  // TODO: @jacco – within the loop the "style" link (style: props.wheel.style.link) isn't passed on to the second and third object.
  console.log(props.pages)
  console.log(props.wheel.style)
  return (
    <Fragment>
      {props.pages.map((pages: PageProps, index: number) => (
        <Any
          is={'li'}
          key={index}
          wheel={{ ...props.wheel, style: props.wheel.style }}
        >
          <NavHeaderListItemLink
            pages={props.pages}
            wheel={{ ...props.wheel, style: props.wheel.style.link }}
          />
        </Any>
      ))}
    </Fragment>
  )
}
