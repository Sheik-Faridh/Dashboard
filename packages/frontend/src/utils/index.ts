import { routesWithNoAuth } from '@/constants'
import { APIErrorResponse } from '@/types/common'

export const logError = (error: unknown) => console.error(error)

export const getErrorMessage = (
  error: APIErrorResponse,
  defaultErrorMessage = 'Something went wrong. Please try agian',
) => {
  return error?.data?.message ?? defaultErrorMessage
}

export const stringToHslColor = (str: string, s = 50, l = 50) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  const h = hash % 360
  return `hsl(${h}, ${s}%, ${l}%)`
}

export const getBlackListedUrl = () =>
  routesWithNoAuth.some((route) => window.location.href.includes(route))
