import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CrayonsEventType, FieldType } from '@/types/common'
import { passwordSchema } from '@/utils/form'
import { CustomFormFields, useRegisterCrayonsFormFields } from '@/hooks/common'

type FormData = {
  email: string
  password: string
  rememberMe: boolean
}

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

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const fields: CustomFormFields<FormData>[] = useMemo(
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

  const onSubmit = useCallback((data: FormData) => {
    console.log(data) // You can handle form submission here
  }, [])

  const formSubmit = useMemo(
    () => ({
      selector: submitBtnSelector,
      callback: handleSubmit(onSubmit),
    }),
    [submitBtnSelector, onSubmit, handleSubmit],
  )

  useRegisterCrayonsFormFields<FormData>({
    fields,
    trigger,
    setValue,
    formSubmit,
  })

  return { errors }
}
