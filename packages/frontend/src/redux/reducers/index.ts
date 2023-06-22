import { authApi } from '@/redux//services/auth'

export default {
  [authApi.reducerPath]: authApi.reducer,
}
