import AuthTemplate from '@/templates/auth'
import VerifyEmailImage from '@/assets/images/verify_email.avif'
import { VerifyUserForm } from '@/components/verifyuser'

const VerifyUserPage = () => {
  return (
    <AuthTemplate image={VerifyEmailImage}>
      <VerifyUserForm />
    </AuthTemplate>
  )
}

export default VerifyUserPage
