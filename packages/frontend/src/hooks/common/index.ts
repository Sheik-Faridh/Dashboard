import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useAppDispatch, useTypedSelector } from '@/redux/store'
import { useLazyLoggedInUserQuery } from '@/redux/services/user'
import { setUser } from '@/redux/slice/user'
import { QueryStatus } from '@reduxjs/toolkit/dist/query'
import { getBlackListedUrl } from '@/utils'

export const useToast = () => {
  const showError = useCallback((message: string) => toast.error(message), [])

  const showSuccess = useCallback(
    (message: string) => toast.success(message),
    [],
  )

  return { showError, showSuccess }
}

export const useAppRoutes = () => {
  const user = useTypedSelector((state) => state.user.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [trigger, result] = useLazyLoggedInUserQuery()

  const { status, data } = result

  useEffect(() => {
    !user && trigger(undefined, true)
  }, [user, trigger])

  useEffect(() => {
    if (!data && status === QueryStatus.rejected && !getBlackListedUrl())
      navigate('/login')
  }, [data, navigate, status])

  useEffect(() => {
    if (data && !user) dispatch(setUser(data.data))
  }, [data, user, dispatch])

  useEffect(() => {
    if (user && getBlackListedUrl()) navigate('/')
  }, [user, navigate])

  return { fetchingUser: status === QueryStatus.pending }
}
