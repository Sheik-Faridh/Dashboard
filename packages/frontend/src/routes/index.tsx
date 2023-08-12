import { Route, Routes } from 'react-router-dom'
import LoginPage from '@/pages/login'
import SignupPage from '@/pages/signup'
import Home from '@/pages/home'
import ForgotPasswordPage from '@/pages/forgotpassword'
import ResetPasswordPage from '@/pages/resetpassword'
import VerifyUserPage from '@/pages/verifyuser'
import VacationPage from '@/pages/vacation'
import { useAppRoutes } from '@/hooks/common'

const AppRoutes = () => {
  const { fetchingUser } = useAppRoutes()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/password/forgot' element={<ForgotPasswordPage />} />
      <Route path='/password/reset/:token' element={<ResetPasswordPage />} />
      <Route path='/verify/user/:token' element={<VerifyUserPage />} />
      <Route path='/vacation' element={<VacationPage />} />
    </Routes>
  )
}

export default AppRoutes
