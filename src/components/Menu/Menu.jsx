import React, {useState} from 'react'
import MenuContent from './MenuContent'
import './Menu.less'
import {Link} from '@reach/router'
export default function Menu() {
  const [isActive, setIsActive] = useState(false)
  const clickOnMenuButton = () => {
    setIsActive(isActive => {
      return !isActive
    })
  }
  const closeMenu = () => {
    setIsActive(false)
  }
  return (
    <div>
      <header>
        <div
          className={`menu-button ${isActive ? 'is-active' : ''}`}
          onClick={clickOnMenuButton}
        ></div>
        <div className="sub-menu">
          <Link className="moby" to="/">
            MOBY
          </Link>
        </div>
      </header>
      <MenuContent isActive={isActive} closeMenu={closeMenu}></MenuContent>
    </div>
  )
}
