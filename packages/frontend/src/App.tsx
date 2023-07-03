import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { Toaster } from 'react-hot-toast'
import LoginPage from '@/pages/login'
import SignupPage from '@/pages/signup'
import Home from '@/pages/home'
import ForgotPasswordPage from '@/pages/forgotpassword'
import ResetPasswordPage from '@/pages/resetpassword'
import VerifyUserPage from '@/pages/verifyuser'

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
          <Route path='/password/forgot' element={<ForgotPasswordPage />} />
          <Route
            path='/password/reset/:token'
            element={<ResetPasswordPage />}
          />
          <Route path='/verify/user/:token' element={<VerifyUserPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          duration: 4000,
          position: 'top-right',
        }}
      />
    </Main>
  )
}

export default App
