import React from 'react'
import {Link} from '@reach/router'

export default function MenuContent({isActive, closeMenu}) {
  const close = () => {
    closeMenu()
  }
  return (
    <div className={`menu-content ${isActive ? 'is-active' : ''}`}>
      <div className="menu-wrapper">
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title" onClick={close}>
                <Link to="code">Code</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title" onClick={close}>
                Art
              </div>
            </div>
          </div>
        </div>
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title" onClick={close}>
                News
              </div>
            </div>
          </div>
        </div>
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title" onClick={close}>
                Diary
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
