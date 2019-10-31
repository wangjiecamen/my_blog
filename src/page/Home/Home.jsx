import React, {useEffect, useState} from 'react'
import './Home.less'
import ScrollReveal from 'scrollreveal'
import {slideBottom, slideRight, slideLeft} from '../../utils/slideParam'
const img = require('../../assets/media/banner.jpg')
function HomePage() {
  useEffect(() => {
    ScrollReveal().reveal('.slide-right', slideRight)
    ScrollReveal().reveal('.slide-bottom', slideBottom)
    ScrollReveal().reveal('.slide-left', slideLeft)
  }, [])

  return (
    <div className="banner-home">
      <div className="banner-wrap">
        <div className="banner-title">
          <div className="title-main slide-right">It`s Moby</div>
          <div className="slide-left">
            <div className="title-sub">Writing helps you to think,</div>
            <div className="title-sub">and its a way of share.</div>
          </div>
        </div>
        <div className="banner-image slide-bottom">
          <img className="image" src={img} alt="" />
        </div>
      </div>
      <div className="content-block">
        <div className="title">Code</div>
      </div>
    </div>
  )
}
export default React.memo(HomePage)
