import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  APIErrorResponse,
  CrayonsEventType,
  FieldType,
  LoginFormData,
} from '@/types/common'
import { passwordSchema } from '@/utils/form'
import {
  CustomFormFields,
  useRegisterCrayonsFormFields,
  useToast,
} from '@/hooks/common'
import { useLoginUserMutation } from '@/redux/services/auth'
import { getErrorMessage, logError } from '@/utils'
import { useNavigate } from 'react-router-dom'

type UseLoginFormProps = {
  selectors: {
    emailSelector: string
    passwordSelector: string
    rememberMeSelector: string
    submitBtnSelector: string
  }
}

export const useLoginForm = ({ selectors }: UseLoginFormProps) => {
  const {
    emailSelector,
    passwordSelector,
    submitBtnSelector,
    rememberMeSelector,
  } = selectors
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: passwordSchema,
    rememberMe: yup.boolean(),
  })

  const navigate = useNavigate()

  const { showError } = useToast()

  const [loginUser, { isLoading }] = useLoginUserMutation()

  const {
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  })

  const fields: CustomFormFields<LoginFormData>[] = useMemo(
    () => [
      {
        name: 'email',
        selector: emailSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
      {
        name: 'password',
        selector: passwordSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
      {
        name: 'rememberMe',
        selector: rememberMeSelector,
        type: FieldType.Checkbox,
        event: CrayonsEventType.CheckboxChange,
      },
    ],
    [emailSelector, passwordSelector, rememberMeSelector],
  )

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        await loginUser(data).unwrap()
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
    [loginUser, showError, navigate, setError],
  )

  const formSubmit = useMemo(
    () => ({
      selector: submitBtnSelector,
      callback: handleSubmit(onSubmit),
    }),
    [submitBtnSelector, onSubmit, handleSubmit],
  )

  useRegisterCrayonsFormFields<LoginFormData>({
    fields,
    trigger,
    setValue,
    formSubmit,
  })

  return { errors, isLoading }
}
