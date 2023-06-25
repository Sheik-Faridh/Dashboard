import { Link } from 'react-router-dom'
import { FwInput, FwButton } from '@freshworks/crayons/react'
import { ReactComponent as GoogleIcon } from '@/assets/svg/google-icon.svg'
import { AuthFormContainer } from '@/atoms/container'
import { PasswordInput } from '@/atoms/form'
import Divider from '@/atoms/divider'
import { useSignupForm } from '@/hooks/signup'
import { getFormInputError, getFormInputState } from '@/utils/form'

const Form = () => {
  const { errors } = useSignupForm({
    selectors: {
      nameSelector: '#name',
      emailSelector: '#email',
      passwordSelector: '#password',
      confirmPasswordSelector: '#confirm-password',
      submitBtnSelector: '#signup-submit-btn',
    },
  })
  return (
    <AuthFormContainer className='fw-flex fw-justify-center'>
      <div className='form-wrapper fw-card-3 fw-p-20'>
        <label className='fw-type-h4 fw-color-smoke-700'>
          Create your account
        </label>
        <div className='oauth-button-wrapper fw-flex'>
          <FwButton color='secondary'>
            <GoogleIcon />
            Sign up with Google
          </FwButton>
        </div>
        <Divider>or</Divider>
        <form>
          <FwInput
            id='name'
            type='name'
            label='User Name'
            placeholder='Enter your name'
            state={getFormInputState(errors?.name)}
            errorText={getFormInputError(errors?.name)}
            required
            clearInput
          />
          <FwInput
            id='email'
            type='email'
            label='Email'
            iconLeft='email'
            placeholder='Enter your email'
            state={getFormInputState(errors?.email)}
            errorText={getFormInputError(errors?.email)}
            required
            clearInput
          />
          <PasswordInput
            id='password'
            label='Password'
            state={getFormInputState(errors?.password)}
            errorText={getFormInputError(errors?.password)}
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
            <FwButton color='primary' id='signup-submit-btn'>
              Submit
            </FwButton>
          </div>
          <div className='fw-flex'>
            <span className='fw-type-h7 fw-color-elephant-800'>
              Already have an account?
              <Link
                className='fw-type-h7 fw-color-azure-800 fw-pl-4'
                to='/login'
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </AuthFormContainer>
  )
}

export default Form
