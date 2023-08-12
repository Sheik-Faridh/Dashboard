import { api } from './api'
import { LoginFormData, SignupFormData } from '@/types/common'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body: LoginFormData) => ({
        url: `auth/login`,
        method: 'POST',
        body,
      }),
    }),
    signupUser: build.mutation({
      query: (body: SignupFormData) => ({
        url: `auth/signup`,
        method: 'POST',
        body,
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: `auth/logout`,
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
