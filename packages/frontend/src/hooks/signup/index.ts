import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { passwordSchema } from '@/utils/form'
import {
  CustomFormFields,
  useRegisterCrayonsFormFields,
  useToast,
} from '@/hooks/common'
import {
  APIErrorResponse,
  CrayonsEventType,
  FieldType,
  SignupFormData,
} from '@/types/common'
import { useCallback, useMemo } from 'react'
import { useSignupUserMutation } from '@/redux/services/auth'
import { getErrorMessage, logError } from '@/utils'

type UseSignupFormProps = {
  selectors: {
    nameSelector: string
    emailSelector: string
    passwordSelector: string
    confirmPasswordSelector: string
    submitBtnSelector: string
  }
}

export const useSignupForm = ({ selectors }: UseSignupFormProps) => {
  const {
    nameSelector,
    emailSelector,
    passwordSelector,
    confirmPasswordSelector,
    submitBtnSelector,
  } = selectors
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
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm<SignupFormData>({
    resolver: yupResolver(schema),
  })

  const fields: CustomFormFields<SignupFormData>[] = useMemo(
    () => [
      {
        name: 'name',
        selector: nameSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
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
        name: 'confirmPassword',
        selector: confirmPasswordSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
    ],
    [confirmPasswordSelector, emailSelector, nameSelector, passwordSelector],
  )

  const onSubmit = useCallback(
    async (data: SignupFormData) => {
      try {
        await signupUser(data).unwrap()
        reset()
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

  const formSubmit = useMemo(
    () => ({
      selector: submitBtnSelector,
      callback: handleSubmit(onSubmit),
    }),
    [submitBtnSelector, onSubmit, handleSubmit],
  )

  useRegisterCrayonsFormFields<SignupFormData>({
    fields,
    trigger,
    setValue,
    formSubmit,
  })

  return { errors, isLoading }
}
