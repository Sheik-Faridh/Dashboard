import { InputState } from '@/types/common'
import { FieldError } from 'react-hook-form'
import * as yup from 'yup'

export const passwordSchema = yup
  .string()
  .required('Password is required')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
    'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character',
  )

export const getFormInputState = (error?: FieldError) =>
  error?.message ? InputState.Error : InputState.Normal

export const getFormInputError = (error?: FieldError) => error?.message ?? ''
