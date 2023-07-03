import { Link } from 'react-router-dom'
import { EnvelopeClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { ReactComponent as GoogleIcon } from '@/assets/svg/google-icon.svg'
import { AuthFormContainer } from '@/atoms/container'
import { PasswordInput, TextField } from '@/atoms/form'
import Button from '@/atoms/form/button'
import Divider from '@/atoms/divider'
import { useSignupForm } from '@/hooks/signup'
import { getFormInputError } from '@/utils/form'

const Form = () => {
  const { errors, isLoading, register, handleSubmit, onSubmit } =
    useSignupForm()
  return (
    <AuthFormContainer className='flex justify-center'>
      <div className='form-wrapper p-4'>
        <label className='text-lg font-bold text-slate-700'>
          Create your account
        </label>
        <div className='oauth-button-wrapper flex'>
          <Button color='secondary'>
            <GoogleIcon />
            Sign up with Google
          </Button>
        </div>
        <Divider>or</Divider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='User Name'
            placeholder='Enter your name'
            startIcon={<PersonIcon />}
            {...register('name')}
            error={getFormInputError(errors?.name)}
            required
          />
          <TextField
            type='email'
            label='Email'
            placeholder='Enter your email'
            startIcon={<EnvelopeClosedIcon />}
            {...register('email')}
            error={getFormInputError(errors?.email)}
            required
          />
          <PasswordInput
            label='Password'
            {...register('password')}
            error={getFormInputError(errors?.password)}
            required
          />
          <PasswordInput
            label='Confirm Password'
            {...register('confirmPassword')}
            error={getFormInputError(errors?.confirmPassword)}
            required
          />
          <div className='btn-wrapper flex'>
            <Button type='submit' color='primary' loading={isLoading}>
              Submit
            </Button>
          </div>
          <div className='flex'>
            <span className='text-sm text-slate-400'>
              Already have an account?
              <Link
                className='text-sm font-medium text-blue-600 hover:text-blue-800 pl-2'
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
