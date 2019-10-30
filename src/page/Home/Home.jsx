import React, {useEffect, useState} from 'react'
import './Home.less'
import ScrollReveal from 'scrollreveal'
import {slideBottom, slideRight} from '../../utils/slideParam'
const img = require('../../assets/media/banner.jpg')
function HomePage() {
  useEffect(() => {
    ScrollReveal().reveal('.slide-right', slideRight)
    ScrollReveal().reveal('.slide-bottom', slideBottom)
  }, [])

  return (
    <div className="banner-home">
      <div className="banner-wrap">
        <div className="banner-title">
          <div className="title-info slide-right">It`s Moby</div>
        </div>
        <div className="banner-image slide-bottom">
          <img className="image" src={img} alt="" />
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default React.memo(HomePage)
