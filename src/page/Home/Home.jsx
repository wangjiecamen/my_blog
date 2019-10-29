import React from 'react'
import './Home.less'
const img = require('../../assets/media/banner.jpg')
export default function HomePage() {
  return (
    <div className="banner-home">
      <div className="banner-wrap">
        <div className="banner-title">
          <div className="title-info slide-right">
            Développons ensemble votre stratégie digitale
          </div>
        </div>
        <div className="banner-image slide-bottom">
          <img className="image" src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
