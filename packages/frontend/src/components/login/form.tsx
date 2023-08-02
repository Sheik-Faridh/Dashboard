import { Link } from 'react-router-dom'
import { ReactComponent as GoogleIcon } from '@/assets/svg/google-icon.svg'
import { MailIcon } from 'lucide-react'
import { AuthFormContainer } from '@/atoms/container'
import Divider from '@/atoms/divider'
import { PasswordInput, TextField, Button, Checkbox } from '@/atoms/form'
import { useLoginForm } from '@/hooks/login'
import { getFormInputError } from '@/utils/form'

const Form = () => {
  const { errors, isLoading, handleSubmit, onSubmit, register } = useLoginForm()
  return (
    <AuthFormContainer className='flex justify-center'>
      <div className='form-wrapper p-4'>
        <label className='text-lg font-bold text-slate-700'>
          Log in to your account
        </label>
        <div className='oauth-button-wrapper flex'>
          <Button color='secondary'>
            <GoogleIcon />
            Sign in with Google
          </Button>
        </div>
        <Divider>or</Divider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type='email'
            label='Email'
            startIcon={<MailIcon />}
            placeholder='Enter your email'
            hintText='Enter your email address associated with the account'
            {...register('email')}
            error={getFormInputError(errors?.email)}
            required
          />
          <PasswordInput
            label='Password'
            className='no-margin'
            hintText='Enter your account password'
            {...register('password')}
            error={getFormInputError(errors?.password)}
            required
          />
          <div className='line-wrapper flex justify-between items-center'>
            <Checkbox label='Remember Me' {...register('rememberMe')} />
            <Link
              className='text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline'
              to='/password/forgot'
            >
              Forgot Password?
            </Link>
          </div>
          <div className='btn-wrapper flex'>
            <Button type='submit' color='primary' loading={isLoading}>
              Submit
            </Button>
          </div>
          <div className='flex'>
            <span className='text-sm text-slate-400'>
              Don't have an account?
              <Link
                className='text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline pl-2'
                to='/signup'
              >
                Create One
              </Link>
            </span>
          </div>
        </form>
      </div>
    </AuthFormContainer>
  )
}

export default Form
