import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import LoginPage from '@/pages/login'
import SignupPage from '@/pages/signup'
import Home from '@/pages/home'

const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
`

const App = () => {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </Main>
  )
}

export default App
