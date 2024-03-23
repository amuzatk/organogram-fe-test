// redux/slices/tokenSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
  value: string;
}

const initialState: TokenState = {
  value: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = '';
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
