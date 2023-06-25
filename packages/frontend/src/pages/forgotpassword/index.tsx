import { ForgotPasswordForm } from '@/components/forgotpassword'
import AuthTemplate from '@/templates/auth'
import ForgotPasswordImage from '@/assets/images/forgotpassword.avif'

const ForgotPasswordPage = () => {
  return (
    <AuthTemplate image={ForgotPasswordImage}>
      <ForgotPasswordForm />
    </AuthTemplate>
  )
}

export default ForgotPasswordPage
