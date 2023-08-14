import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { getBlackListedUrl } from '@/utils'
import { apiBaseUrl } from '@/constants'

const baseQuery = fetchBaseQuery({
  baseUrl: `${apiBaseUrl}/api/v1`,
  credentials: 'include',
})

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  const isBlackListedUrl = getBlackListedUrl()
  if (
    !isBlackListedUrl &&
    !api.endpoint.includes('/auth') &&
    result.error &&
    result.error.status === 401
  )
    window.location.href = '/login'
  return result
}

export default customBaseQuery
