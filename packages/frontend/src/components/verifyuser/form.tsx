import { AuthFormContainer } from '@/atoms/container'
import { FwButton } from '@freshworks/crayons/react'

const VerifyUserForm = () => {
  return (
    <AuthFormContainer className='fw-flex fw-justify-center'>
      <div className='form-wrapper fw-card-3 fw-p-20'>
        <label className='fw-type-h4 fw-color-smoke-700'>
          Verify Email Address ✉️
        </label>
        <label className='fw-type-h6 fw-color-smoke-300	fw-my-16'>
          Account activation link sent to your email address: {} Please follow
          the link inside to continue.
        </label>
        <div className='btn-wrapper fw-flex fw-justify-center'>
          <FwButton
            id='sendverifymail-btn'
            color='primary'
            //   loading={isLoading}
          >
            Verify your account
          </FwButton>
        </div>
        <div className='fw-flex fw-justify-center fw-items-center fw-gap-1 fw-my-16'>
          <span className='fw-type-h6 fw-color-elephant-800'>
            Don't get the mail?
          </span>
          <FwButton color='link'>Resend Activation Link</FwButton>
        </div>
      </div>
    </AuthFormContainer>
  )
}

export default VerifyUserForm
