import { LoginForm } from '@/components/login'
import AuthTemplate from '@/templates/auth'
import LoginImage from '@/assets/images/login.webp'

const LoginPage = () => {
  return (
    <AuthTemplate image={LoginImage}>
      <LoginForm />
    </AuthTemplate>
  )
}

export default LoginPage
