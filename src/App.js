import React, {useState, useEffect} from 'react'
import './App.less'
import MenuContent from './components/MenuContent.jsx'
import ScrollReveal from 'scrollreveal'
import {slideBottom, slideRight} from './utils/slideParam'
import {Scrollbars} from 'react-custom-scrollbars'
import {Router, Link} from '@reach/router'
import HomePage from './page/Home/Home.jsx'
import CodePage from './page/Code/Code.jsx'
function App() {
  const [isActive, setIsActive] = useState(false)
  const [height, setHeight] = useState('')
  useEffect(() => {
    setHeight(document.body.clientHeight)
    ScrollReveal().reveal('.slide-right', slideRight)
    ScrollReveal().reveal('.slide-bottom', slideBottom)
    return () => {}
  }, [])
  const clickOnMenuButton = () => {
    setIsActive(isActive => {
      return !isActive
    })
  }
  const closeMenu = () => {
    setIsActive(false)
  }
  return (
    <Scrollbars
      autoHide
      autoHeight
      autoHeightMax={height}
      autoHideTimeout={1000}
      autoHideDuration={800}
    >
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
        <main className="main">
          <div className="contract-wrap">
            <div className="contract">contract</div>
          </div>
          <Router>
            <HomePage path="/"></HomePage>
            <CodePage path="/code"></CodePage>
          </Router>
        </main>
        <MenuContent isActive={isActive} closeMenu={closeMenu}></MenuContent>
      </div>
    </Scrollbars>
  )
}

export default App
