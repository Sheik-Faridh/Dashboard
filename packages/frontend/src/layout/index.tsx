import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import AppHeader from './header'
import PageLoader from '@/components/loader'
import Sidebar from './sidebar'
import { useTypedSelector } from '@/redux/store'

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
  const user = useTypedSelector((state) => state.user.user)

  return (
    <Container className='w-screen h-screen'>
      <AppHeader />
      <Sidebar />
      <main className='relative p-[30px] bg-smoke-25'>
        {children}
        {!user && (
          <div className='absolute top-0 left-0 w-full h-full z-4 bg-white'>
            <PageLoader />
          </div>
        )}
      </main>
    </Container>
  )
}

export default Layout
