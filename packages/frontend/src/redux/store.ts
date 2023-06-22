import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/redux/reducers'
import { authApi } from '@/redux/services/auth'

export const store = configureStore({
  reducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware]),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
