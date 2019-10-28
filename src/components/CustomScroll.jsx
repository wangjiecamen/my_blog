import React, { useEffect, useRef } from 'react'
export default function CustomScroll() {
  const scroll = () => {
    const scrollTop =
      document.documentElement.scrollTop + document.documentElement.scrollTop
    console.log(document.documentElement.scrollTop)
    console.log(thumb.current.style.transform)

    thumb.current.style.transform = `translateY(${scrollTop}px)`
  }
  const thumb = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', scroll, false)
  }, [])
  return (
    <div className="custom-scroll">
      <div
        className="scrollbar-thumb"
        ref={thumb}
        style={{ transform: 'translateY(0px)' }}
      ></div>
    </div>
  )
}
