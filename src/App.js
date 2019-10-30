import React, {useState, useEffect} from 'react'
import './App.less'
import {Scrollbars} from 'react-custom-scrollbars'
import {Router, Location} from '@reach/router'
import HomePage from './page/Home/Home.jsx'
import CodePage from './page/Code/Code.jsx'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Menu from './components/Menu/Menu'
function App() {
  const [height, setHeight] = useState('')
  useEffect(() => {
    setHeight(document.body.clientHeight)
    return () => {}
  }, [])

  const FadeTransitionRouter = props => (
    <Location>
      {({location}) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Router location={location} className="router">
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  )
  const Contract = () => {
    return (
      <div className="contract-wrap">
        <div className="contract">contract</div>
      </div>
    )
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
        <Menu />
        <main className="main">
          <Contract />
          <FadeTransitionRouter>
            <HomePage path="/"></HomePage>
            <CodePage path="/code"></CodePage>
          </FadeTransitionRouter>
        </main>
      </div>
    </Scrollbars>
  )
}

export default App
