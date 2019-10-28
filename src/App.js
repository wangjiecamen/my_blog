import React, {useState, useEffect, useRef} from 'react'
import './App.less'
import MenuContent from './components/MenuContent.jsx'
import CustomScroll from './components/CustomScroll.jsx'
import ScrollReveal from 'scrollreveal'
function App() {
  const [isActive, setIsActive] = useState(false)
  const [scrollHidden, setScrollHidden] = useState(true)
  const dom = useRef(null)
  useEffect(() => {
    ScrollReveal().reveal(dom.current, {delay: 500, duration: 1000})
  }, [])
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
      <main className="main">
        <div className="banner-home">
          <div className="banner-wrap">
            <div className="banner-title slide-up">
              <div className="title-info " ref={dom}>
                Développons ensemble votre stratégie digitale
              </div>
            </div>
            <div className="banner-image slide-up"></div>
          </div>
        </div>
        <CustomScroll></CustomScroll>
      </main>
      <MenuContent isActive={isActive}></MenuContent>
    </div>
  )
}

export default App
