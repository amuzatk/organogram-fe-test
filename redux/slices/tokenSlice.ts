// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface TokenState {
//   value: string;
// }

// const initialState: TokenState = {
//   value: '',
// };

// export const tokenSlice = createSlice({
//   name: 'token',
//   initialState,
//   reducers: {
//     setToken: (state, action: PayloadAction<string>) => {
//       state.value = action.payload;
//     },
//     clearToken: (state) => {
//       state.value = '';
//     },
//   },
// });

// export const { setToken, clearToken } = tokenSlice.actions;

// export default tokenSlice.reducer;



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
  value: string;
  error: string | null; // Add error field to the state
}

const initialState: TokenState = {
  value: '',
  error: null,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.error = null; // Reset error when token is set
    },
    clearToken: (state) => {
      state.value = '';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, clearToken, setError } = tokenSlice.actions;

export default tokenSlice.reducer;
