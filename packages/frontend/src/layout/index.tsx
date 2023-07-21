import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import AppHeader from './header'
import Sidebar from './sidebar'

const Container = styled.div`
  & > main {
    top: 3.6rem;
    left: 3.6rem;
    min-height: calc(100vh - 3.6rem);
    width: calc(100vw - 3.6rem);
    overflow-y: auto;
  }
`

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container className='w-screen h-screen'>
      <AppHeader />
      <Sidebar />
      <main className='relative p-[30px] bg-smoke-25'>{children}</main>
    </Container>
  )
}

export default Layout
