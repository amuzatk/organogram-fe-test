
// redux/store/hooks.ts
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store'; // Import from '../store' instead of '.'

export const useAppDispatch = () => useDispatch<AppDispatch>();
