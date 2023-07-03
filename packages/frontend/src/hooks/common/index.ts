import { useCallback } from 'react'
import { toast } from 'react-hot-toast'

export const useToast = () => {
  const showError = useCallback((message: string) => toast.error(message), [])

  const showSuccess = useCallback(
    (message: string) => toast.success(message),
    [],
  )

  return { showError, showSuccess }
}
