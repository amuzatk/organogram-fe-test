// redux/thunks/tokenThunks.ts
import { AppThunk } from '../store';
import axios from 'axios';
import { setToken } from '../slices/tokenSlice';

export const fetchToken = (email: string): AppThunk => async (dispatch) => {
  try {
    const tokenResponse = await axios.post<{ token: string }>('https://qt.organogram.app/token', { email });
    const receivedToken = tokenResponse.data.token;
    dispatch(setToken(receivedToken));
  } catch (error) {
    // Handle error
  }
};
