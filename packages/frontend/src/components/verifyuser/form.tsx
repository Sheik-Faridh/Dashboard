import { AuthFormContainer } from '@/atoms/container'
import { Button } from '@/atoms/form'

const VerifyUserForm = () => {
  return (
    <AuthFormContainer className='flex justify-center'>
      <div className='form-wrapper p-4'>
        <label className='text-lg font-bold text-slate-700'>
          Verify Email Address ✉️
        </label>
        <label className='text-md text-slate-500 my-4'>
          Account activation link sent to your email address: {} Please follow
          the link inside to continue.
        </label>
        <div className='btn-wrapper flex justify-center'>
          <Button
            color='primary'
            //   loading={isLoading}
          >
            Verify your account
          </Button>
        </div>
        <div className='flex justify-center items-center gap-1 my-4'>
          <span className='text-sm text-slate-400'>Don't get the mail?</span>
          <Button className='w-auto px-2' color='link'>
            Resend Activation Link
          </Button>
        </div>
      </div>
    </AuthFormContainer>
  )
}

export default VerifyUserForm
