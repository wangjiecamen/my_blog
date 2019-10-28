import React from 'react'

export default function MenuContent({isActive}) {
  return (
    <div className={`menu-content ${isActive ? 'is-active' : ''}`}>
      <div className="menu-wrapper">
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title">Code</div>
              <div className="items">
                <div className="item">javaScript</div>
                <div className="item">css</div>
                <div className="item">html</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title">Music</div>
              <div className="items">
                <div className="item">classic</div>
                <div className="item">pop</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title">A</div>
              <div className="items">
                <div className="item">a</div>
                <div className="item">a</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-col">
          <div className="item-wrapper">
            <div className="item-block">
              <div className="item-title">Diary</div>
              <div className="items">
                <div className="item">a</div>
                <div className="item">a</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
