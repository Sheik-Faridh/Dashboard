import { Link } from 'react-router-dom'
import { MailIcon, ChevronLeftIcon } from 'lucide-react'
import { AuthFormContainer } from '@/atoms/container'
import { TextField, Button } from '@/atoms/form'

const ForgotPasswordForm = () => {
  return (
    <AuthFormContainer className='flex justify-center'>
      <div className='form-wrapper p-4'>
        <label className='text-lg font-bold text-slate-700'>
          Forgot Password? 🔒
        </label>
        <label className='text-md text-slate-500 my-4'>
          Enter your email and we'll send you instructions to reset your
          password
        </label>
        <form>
          <TextField
            type='email'
            label='Email'
            startIcon={<MailIcon />}
            placeholder='Enter your email'
            hintText='Enter your email address associated with the account'
            required
          />
          <div className='btn-wrapper flex'>
            <Button
              color='primary'
              //   loading={isLoading}
            >
              Send Reset Link
            </Button>
          </div>
          <div className='flex justify-center my-5'>
            <span className='text-sm text-slate-400'>
              <Link
                className='flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline pl-2'
                to='/login'
              >
                <ChevronLeftIcon className='w-[14px]' />
                <span>Back to Login</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </AuthFormContainer>
  )
}

export default ForgotPasswordForm
