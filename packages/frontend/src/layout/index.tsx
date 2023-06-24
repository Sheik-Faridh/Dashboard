import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import AppHeader from './header'
import Sidebar from './sidebar'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  & > main {
    position: relative;
    top: 3.6rem;
    left: 3.6rem;
    min-height: calc(100vh - 3.6rem);
    padding: 10px;
  }
`

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <AppHeader />
      <Sidebar />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
