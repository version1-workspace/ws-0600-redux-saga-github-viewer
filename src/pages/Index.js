import React, { useState } from 'react'
import styled from 'styled-components'
import Issue from '../containers/Issue'
import PullRequestTab from '../components/templates/PullRequest'
import TabHeader from '../components/organisms/TabHeader'

const tabs = [
  {
    key: 'issue',
    label: 'Issue'
  },
  {
    key: 'pull-requests',
    label: 'Pull Request'
  }
]

const Container = styled.div``
const Content = styled.div``

const Tabs = [
  {
    key: 'issue',
    component: (key) => <Issue key={key}/>
  },
  {
    key: 'pull-requests',
    component: (key) => <PullRequestTab key={key}/>
  }
]

const Index = () => {
  const [selected, setSelected] = useState('issue')
  return (
    <Container>
      <Content>
        <TabHeader selected={selected} onChange={setSelected} tabs={tabs} />
        {Tabs.map((item) => (selected === item.key ? item.component(item.key) : <div key={item.key}></div>))}
      </Content>
    </Container>
  )
}

export default Index
