import { APIErrorResponse } from '@/types/common'

export const logError = (error: unknown) => console.error(error)

export const getErrorMessage = (
  error: APIErrorResponse,
  defaultErrorMessage = 'Something went wrong. Please try agian',
) => {
  return error?.data?.message ?? defaultErrorMessage
}
