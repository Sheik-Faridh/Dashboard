import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { passwordSchema } from '@/utils/form'

type FormData = {
  newPassword: string
  confirmPassword: string
}

export const useResetPasswordForm = () => {
  const schema = yup.object().shape({
    newPassword: passwordSchema,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), ''], 'Passwords must match')
      .required('Confirm Password is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback((data: FormData) => {
    console.log(data) // You can handle form submission here
  }, [])

  return { errors, register, handleSubmit, onSubmit }
}
