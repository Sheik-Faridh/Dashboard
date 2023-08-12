import user from '@/redux/slice/user'
import { api } from '@/redux/services/api'

export default {
  [api.reducerPath]: api.reducer,
  user,
}
