import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  margin: 0 auto;
  max-width: 550px;
  width: 90vw;
}
`

export default ({children}) => <Layout>
  {children}
</Layout>