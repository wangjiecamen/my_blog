import React, {useState} from 'react'
import './App.less'

function App() {
  const [isActive, setIsActive] = useState(false)
  const clickOnMenuButton = () => {
    setIsActive(isActive => {
      return !isActive
    })
  }
  return (
    <div className="container">
      <header>
        <div
          className={`menu-button ${isActive ? 'is-active' : ''}`}
          onClick={clickOnMenuButton}
        ></div>
        <div className="sub-menu">
          <div className="moby">MOBY</div>
        </div>
      </header>

      <div className={`menu-content ${isActive ? 'is-active' : ''}`}>
        <div className="menu-wrapper">
          <div className="menu-col">
            <span className="item-wrapper">
              <span className="items">
                <span className="item-title">A</span>
                <span className="item">a</span>
                <span className="item">a</span>
              </span>
            </span>
          </div>
          <div className="menu-col">
            <span className="item-wrapper">
              <span className="items">
                <span className="item-title">A</span>
                <span className="item">a</span>
                <span className="item">a</span>
              </span>
            </span>
          </div>
          <div className="menu-col">
            <span className="item-wrapper">
              <span className="items">
                <span className="item-title">A</span>
                <span className="item">a</span>
                <span className="item">a</span>
              </span>
            </span>
          </div>
          <div className="menu-col">
            <span className="item-wrapper">
              <span className="items">
                <span className="item-title">A</span>
                <span className="item">a</span>
                <span className="item">a</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
