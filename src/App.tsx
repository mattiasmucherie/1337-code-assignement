import React from 'react'
import styled from 'styled-components'
import EmployeeList from './containers/EmployeeList'

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`

function App() {
  return (
    <PageContainer>
      <EmployeeList />
    </PageContainer>
  )
}

export default App
