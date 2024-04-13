
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../store';

// export const useAppDispatch = () => useDispatch<AppDispatch>();



import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { AppDispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = (selector: (state: RootState) => any) => useSelector(selector);
