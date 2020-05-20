import React, { useEffect, useRef } from 'react'
import { EmbedProps } from '../../models/embed'
import { PageSectionProps } from '../../models/page-section/page-section'

interface ScrollSpyProps {
  /** The #id added to the div  */
  children: any
  eventId: string
  pageSectionProps: PageSectionProps
  siteEmbeds: EmbedProps[]
}

export const ScrollSpy = (props: ScrollSpyProps) => {
  const divRef = useRef() as any
  const inView = useRef(false)
  const isServer = typeof window === 'undefined'

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
      // The element is bigger than the viewport, require element to fill viewport
      inView.current =
        boundingRect.top < 0 && boundingRect.bottom > viewportHeight
    } else {
      // The element is smaller than the viewport, require full element to be visibel
      inView.current =
        boundingRect.top > 0 && boundingRect.bottom < viewportHeight
    }

    if (lastInview != inView.current) {
      props.siteEmbeds.forEach((embed: EmbedProps) => {
        const postFix = inView.current ? '-enter' : '-leave'
        if (embed.code && embed.type === 'js-page-section') {
          Function(
            'eventId',
            'props',
            embed.code.code
          )(props.eventId + postFix, props.pageSectionProps)
        }
      })
    }
  }

  useEffect(() => {
    if (isServer) {
      return
    }
    // eslint-disable-next-line no-undef
    window.addEventListener('scroll', onScroll)
    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div ref={divRef} id={props.eventId}>
      {props.children}
    </div>
  )
}
