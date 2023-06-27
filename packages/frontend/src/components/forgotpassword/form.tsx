import { Link } from 'react-router-dom'
import { FwButton, FwInput, FwIcon } from '@freshworks/crayons/react'
import { AuthFormContainer } from '@/atoms/container'

const ForgotPasswordForm = () => {
  return (
    <AuthFormContainer className='fw-flex fw-justify-center'>
      <div className='form-wrapper fw-card-3 fw-p-20'>
        <label className='fw-type-h4 fw-color-smoke-700'>
          Forgot Password? 🔒
        </label>
        <label className='fw-type-h6 fw-color-smoke-300	fw-my-16'>
          Enter your email and we'll send you instructions to reset your
          password
        </label>
        <form>
          <FwInput
            id='forgotpassword'
            type='email'
            label='Email'
            iconLeft='email'
            placeholder='Enter your email'
            hintText='Enter your email address associated with the account'
            // state={getFormInputState(errors?.email)}
            // errorText={getFormInputError(errors?.email)}
            required
            clearInput
          />
          <div className='btn-wrapper fw-flex'>
            <FwButton
              id='forgotpassword-submit-btn'
              color='primary'
              //   loading={isLoading}
            >
              Send Reset Link
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

export default ForgotPasswordForm
