import { LoginFormData, SignupFormData } from '@/types/common'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth`,
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body: LoginFormData) => ({
        url: `login`,
        method: 'POST',
        body,
      }),
    }),
    signupUser: build.mutation({
      query: (body: SignupFormData) => ({
        url: `signup`,
        method: 'POST',
        body,
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: `logout`,
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useSignupUserMutation,
} = authApi
