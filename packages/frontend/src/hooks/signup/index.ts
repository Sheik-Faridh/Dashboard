import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { passwordSchema } from '@/utils/form'
import { useToast } from '@/hooks/common'
import { APIErrorResponse, SignupFormData } from '@/types/common'
import { useSignupUserMutation } from '@/redux/services/auth'
import { getErrorMessage, logError } from '@/utils'

export const useSignupForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: passwordSchema,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required('Confirm Password is required'),
  })

  const { showError, showSuccess } = useToast()

  const [signupUser, { isLoading }] = useSignupUserMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(
    async (data: SignupFormData) => {
      try {
        await signupUser(data).unwrap()
        reset({
          email: '',
          name: '',
          password: '',
          confirmPassword: '',
        })
        showSuccess(
          'Email notification sent to your email address. Please verify the email address',
        )
      } catch (error) {
        logError(error)
        const errorMessage = getErrorMessage(
          error as APIErrorResponse,
          'failed to signup. Please try again',
        )
        showError(errorMessage)
      }
    },
    [showError, showSuccess, signupUser, reset],
  )

  return { errors, isLoading, register, handleSubmit, onSubmit }
}
