import { useCallback, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useTypedSelector } from '@/redux/store'
import { useLazyLoggedInUserQuery } from '@/redux/services/user'
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
  const mountedRef = useRef(false)
  const user = useTypedSelector((state) => state.user.user)
  const navigate = useNavigate()
  const [trigger] = useLazyLoggedInUserQuery()

  const { id } = user ?? {}

  useEffect(() => {
    if (!mountedRef.current) {
      trigger(undefined, true)
      mountedRef.current = true
    }

    return () => {
      mountedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (id && getBlackListedUrl()) navigate('/')
  }, [id, navigate])

  return {}
}
