import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Index from './pages/Index'
import Profile from './containers/Profile'
import Issue from './pages/Issue'
import PullRequest from './pages/PullRequest'
import Header from './components/organisms/Header'
import Modal from './containers/Modal'

const Container = styled.div``

const Content = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Router basename="/redux-saga-github-viewer">
      <Container>
        <GlobalStyle />
        <Header />
        <Content>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/issue">
              <Issue />
            </Route>
            <Route path="/pull-request">
              <PullRequest />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </Content>
        <Modal />
      </Container>
    </Router>
  )
}

export default App
