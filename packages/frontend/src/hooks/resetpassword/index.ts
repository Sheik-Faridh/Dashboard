import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { passwordSchema } from '@/utils/form'
import { CustomFormFields, useRegisterCrayonsFormFields } from '@/hooks/common'
import { CrayonsEventType, FieldType } from '@/types/common'
import { useCallback, useMemo } from 'react'

type FormData = {
  newPassword: string
  confirmPassword: string
}

type UseResetPasswordFormProps = {
  selectors: {
    newPasswordSelector: string
    confirmPasswordSelector: string
    submitBtnSelector: string
  }
}

export const useResetPasswordForm = ({
  selectors,
}: UseResetPasswordFormProps) => {
  const { newPasswordSelector, confirmPasswordSelector, submitBtnSelector } =
    selectors
  const schema = yup.object().shape({
    newPassword: passwordSchema,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), ''], 'Passwords must match')
      .required('Confirm Password is required'),
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
        name: 'newPassword',
        selector: newPasswordSelector,
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
    [confirmPasswordSelector, newPasswordSelector],
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
