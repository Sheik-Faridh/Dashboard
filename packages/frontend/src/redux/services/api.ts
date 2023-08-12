import { createApi } from '@reduxjs/toolkit/dist/query/react'
import customBaseQuery from './query'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  tagTypes: ['Users'],
  endpoints: () => ({}),
})
