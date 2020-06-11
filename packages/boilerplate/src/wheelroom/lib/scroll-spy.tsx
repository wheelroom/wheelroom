import React, { useEffect, useRef } from 'react'
import { EmbedProps } from '../models/embed/embed'

interface ScrollSpyProps {
  /** The #id added to the div  */
  children: any
  eventId: string | undefined
  sectionProps: any
  siteEmbeds: EmbedProps[]
}

export const ScrollSpy = (props: ScrollSpyProps) => {
  const isServer = typeof window === 'undefined'
  const divRef = useRef() as any
  const inView = useRef(false)

  const onScroll = () => {
    if (isServer) {
      return
    }
    const boundingRect = divRef.current.getBoundingClientRect()
    const lastInview = inView.current

    const viewportHeight = Math.max(
      // eslint-disable-next-line no-undef
      document.documentElement.clientHeight || 0,
      // eslint-disable-next-line no-undef
      window.innerHeight || 0
    )
    if (boundingRect.height > viewportHeight) {
      // A) The element is bigger than the viewport, require element to fill viewport
      inView.current =
        boundingRect.top < viewportHeight / 3 &&
        boundingRect.bottom > (viewportHeight / 3) * 2
    } else {
      // B) The element is smaller than the viewport, require full element to be visible
      inView.current =
        boundingRect.top > 0 && boundingRect.bottom < viewportHeight
    }

    if (
      lastInview != inView.current &&
      props.siteEmbeds &&
      Array.isArray(props.siteEmbeds)
    ) {
      props.siteEmbeds.forEach((embed: EmbedProps) => {
        const postFix = inView.current ? '-in-viewport' : '-out-viewport'
        if (embed.code && embed.type === 'js-page-section') {
          Function(
            'eventId',
            'props',
            embed.code.code
          )(props.eventId + postFix, props.sectionProps)
        }
      })
    }
  }

  useEffect(() => {
    if (isServer || !props.eventId) {
      return
    }
    // eslint-disable-next-line no-undef
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener('scroll', onScroll)
    }
  })

  if (!props.eventId) {
    return props.children
  }

  return (
    <div ref={divRef} id={props.eventId}>
      {props.children}
    </div>
  )
}
