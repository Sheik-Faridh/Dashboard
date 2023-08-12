import { api } from './api'
import { APIResponse } from '@/types/common'
import { User } from '@/types/user'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    loggedInUser: build.query<APIResponse<User>, void>({
      query: () => `users/me`,
    }),
  }),
})

export const { useLazyLoggedInUserQuery, useLoggedInUserQuery } = userApi
