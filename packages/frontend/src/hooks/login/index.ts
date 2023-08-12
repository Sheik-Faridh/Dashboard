import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { APIErrorResponse, APIResponse, LoginFormData } from '@/types/common'
import { passwordSchema } from '@/utils/form'
import { useToast } from '@/hooks/common'
import { useLoginUserMutation } from '@/redux/services/auth'
import { getErrorMessage, logError } from '@/utils'
import { useAppDispatch } from '@/redux/store'
import { setUser } from '@/redux/slice/user'
import { User } from '@/types/user'

export const useLoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: passwordSchema,
    rememberMe: yup.boolean(),
  })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { showError } = useToast()

  const [loginUser, { isLoading }] = useLoginUserMutation()

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      rememberMe: false,
    },
  })

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        const res = (await loginUser(data).unwrap()) as APIResponse<User>
        dispatch(setUser(res.data))
        navigate('/')
      } catch (error) {
        logError(error)
        const errorMessage = getErrorMessage(
          error as APIErrorResponse,
          'failed to login. Please try again',
        )
        if (/password/i.test(errorMessage))
          setError('password', { message: errorMessage })
        else if (/email/i.test(errorMessage))
          setError('email', { message: errorMessage })
        else showError(errorMessage)
      }
    },
    [loginUser, showError, navigate, setError, dispatch],
  )

  return { errors, isLoading, handleSubmit, onSubmit, register }
}
