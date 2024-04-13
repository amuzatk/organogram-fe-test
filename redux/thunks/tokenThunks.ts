// import { AppThunk } from '../store';
// import axios from 'axios';
// import { setToken } from '../slices/tokenSlice';

// export const fetchToken = (email: string): AppThunk => async (dispatch) => {
//   try {
//     const tokenResponse = await axios.post<{ token: string }>('https://qt.organogram.app/token', { email });
//     const receivedToken = tokenResponse.data.token;
//     dispatch(setToken(receivedToken));
//   } catch (error) {
//     // Handle error
//   }
// };


import { AppThunk } from '../store';
import axios, { AxiosError } from 'axios';
import { setToken } from '../slices/tokenSlice';

// Define an action to handle errors
export const tokenError = (error: string) => ({
  type: 'token/error',
  payload: error,
});

export const fetchToken = (email: string): AppThunk => async (dispatch) => {
  try {
    const tokenResponse = await axios.post<{ token: string }>('https://qt.organogram.app/token', { email });
    const receivedToken = tokenResponse.data.token;
    dispatch(setToken(receivedToken));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // Handle server response errors
        const responseData = axiosError.response.data as { message?: string };
        const errorMessage = (responseData && responseData.message) || 'An error occurred';
        dispatch(tokenError(errorMessage));
      } else if (axiosError.request) {
        // Handle network errors
        dispatch(tokenError('Network error: Please check your internet connection'));
      } else {
        // Something else happened in making the request that triggered an error
        dispatch(tokenError('An error occurred'));
      }
    } else {
      // Handle other types of errors
      dispatch(tokenError('An error occurred'));
    }
  }
};



