import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '@/types/user'

type InitialState = {
  user: User | null
}

const initialState: InitialState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
