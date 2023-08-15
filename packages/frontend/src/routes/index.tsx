import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppRoutes } from '@/hooks/common'

const LoginPage = lazy(() => import('@/pages/login'))
const SignupPage = lazy(() => import('@/pages/signup'))
const HomePage = lazy(() => import('@/pages/home'))
const ForgotPasswordPage = lazy(() => import('@/pages/forgotpassword'))
const ResetPasswordPage = lazy(() => import('@/pages/resetpassword'))
const VerifyUserPage = lazy(() => import('@/pages/verifyuser'))
const VacationPage = lazy(() => import('@/pages/vacation'))
const NotFoundPage = lazy(() => import('@/pages/notfound'))

const AppRoutes = () => {
  useAppRoutes()

  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/password/forgot' element={<ForgotPasswordPage />} />
        <Route path='/password/reset/:token' element={<ResetPasswordPage />} />
        <Route path='/verify/user/:token' element={<VerifyUserPage />} />
        <Route path='/vacation' element={<VacationPage />} />
        <Route path='/not-found' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/not-found' />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
