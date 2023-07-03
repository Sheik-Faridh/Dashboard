import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import { AuthFormContainer } from '@/atoms/container'
import { PasswordInput } from '@/atoms/form'
import Button from '@/atoms/form/button'
import { useResetPasswordForm } from '@/hooks/resetpassword'
import { getFormInputError } from '@/utils/form'

const ResetPasswordForm = () => {
  const { errors, register, handleSubmit, onSubmit } = useResetPasswordForm()
  return (
    <AuthFormContainer className='fw-flex fw-justify-center'>
      <div className='form-wrapper fw-card-3 fw-p-20'>
        <label className='fw-type-h4 fw-color-smoke-700'>
          Reset Password 🔒
        </label>
        <label className='text-md text-slate-500 mb-4'>
          for <strong></strong>
        </label>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PasswordInput
            label='New Password'
            {...register('newPassword')}
            error={getFormInputError(errors?.newPassword)}
            required
          />
          <PasswordInput
            label='Confirm Password'
            {...register('confirmPassword')}
            error={getFormInputError(errors?.confirmPassword)}
            required
          />
          <div className='btn-wrapper fw-flex'>
            <Button
              type='submit'
              color='primary'
              //   loading={isLoading}
            >
              Set New Password
            </Button>
          </div>
          <div className='flex justify-center my-5'>
            <span className='text-sm text-slate-400'>
              <Link
                className='flex text-xs font-medium text-blue-600 hover:text-blue-800'
                to='/login'
              >
                <ChevronLeftIcon />
                Back to Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </AuthFormContainer>
  )
}

export default ResetPasswordForm
