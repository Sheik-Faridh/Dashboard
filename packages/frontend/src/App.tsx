import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Toaster } from 'react-hot-toast'
import { toastOptions } from '@/constants'
import AppRoutes from '@/routes'

const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
`

const App = () => {
  return (
    <Main>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster toastOptions={toastOptions} />
    </Main>
  )
}

export default App
