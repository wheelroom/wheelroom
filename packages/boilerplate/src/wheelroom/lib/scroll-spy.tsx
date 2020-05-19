import { useEffect, useRef } from 'react'
import * as React from 'react'

interface ScrollSpyProps {
  /** The #id added to the div  */
  id: string
  children: any
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
    const requiredVisibleHeight = boundingRect.height / 3
    const vh = Math.max(
      // eslint-disable-next-line no-undef
      document.documentElement.clientHeight || 0,
      // eslint-disable-next-line no-undef
      window.innerHeight || 0
    )

    inView.current =
      boundingRect.top < requiredVisibleHeight &&
      boundingRect.bottom > requiredVisibleHeight
    if (lastInview != inView.current) {
      // eslint-disable-next-line no-undef
      console.log(`view for ${props.id} changed to`, inView.current, vh)
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
    <div ref={divRef} id={props.id}>
      {props.children}
    </div>
  )
}
