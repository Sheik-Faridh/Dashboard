import { ResetPasswordForm } from '@/components/resetpassword'
import AuthTemplate from '@/templates/auth'
import ResetPasswordImage from '@/assets/images/resetpassword.avif'

const ResetPasswordPage = () => {
  return (
    <AuthTemplate image={ResetPasswordImage}>
      <ResetPasswordForm />
    </AuthTemplate>
  )
}

export default ResetPasswordPage
