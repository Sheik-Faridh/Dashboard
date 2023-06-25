import { Link } from 'react-router-dom'
import { FwButton, FwIcon } from '@freshworks/crayons/react'
import { AuthFormContainer } from '@/atoms/container'
import { PasswordInput } from '@/atoms/form'
import { useResetPasswordForm } from '@/hooks/resetpassword'
import { getFormInputError, getFormInputState } from '@/utils/form'

const ResetPasswordForm = () => {
  const { errors } = useResetPasswordForm({
    selectors: {
      newPasswordSelector: '#new-password',
      confirmPasswordSelector: '#confirm-password',
      submitBtnSelector: '#resetpassword-submit-btn',
    },
  })
  return (
    <AuthFormContainer className='fw-flex fw-justify-center'>
      <div className='form-wrapper fw-card-3 fw-p-20'>
        <label className='fw-type-h4 fw-color-smoke-700'>
          Reset Password 🔒
        </label>
        <label className='fw-type-h7 fw-color-smoke-300	fw-mb-16'>
          for <strong></strong>
        </label>
        <form>
          <PasswordInput
            id='new-password'
            label='New Password'
            state={getFormInputState(errors?.newPassword)}
            errorText={getFormInputError(errors?.newPassword)}
            required
            clearInput
          />
          <PasswordInput
            id='confirm-password'
            label='Confirm Password'
            state={getFormInputState(errors?.confirmPassword)}
            errorText={getFormInputError(errors?.confirmPassword)}
            required
            clearInput
          />
          <div className='btn-wrapper fw-flex'>
            <FwButton
              id='resetpassword-submit-btn'
              color='primary'
              //   loading={isLoading}
            >
              Set New Password
            </FwButton>
          </div>
          <div className='fw-flex fw-justify-center fw-my-16'>
            <span className='fw-type-h7 fw-color-elephant-800'>
              <Link
                className='fw-type-h6 fw-color-azure-800 fw-pl-4 no-underline'
                to='/login'
              >
                <FwIcon
                  name='chevron-left'
                  color='fw-color-azure-800'
                  className='fw-mr-4'
                />
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
