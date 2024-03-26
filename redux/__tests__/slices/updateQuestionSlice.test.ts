// import reducer, { setLoading, setError, clearError } from './updateQuestionSlice';

import reducer, { clearError, setError, setLoading } from "@/redux/slices/updateQuestionSlice";

describe('updateQuestionSlice', () => {
  it('should set loading state correctly', () => {
    const initialState = { loading: false, error: null };
    const newState = reducer(initialState, setLoading(true));
    expect(newState.loading).toEqual(true);
  });

  it('should set error state correctly', () => {
    const initialState = { loading: false, error: null };
    const newState = reducer(initialState, setError('Some error message'));
    expect(newState.error).toEqual('Some error message');
  });

  it('should clear error state correctly', () => {
    const initialState = { loading: false, error: 'Some error message' };
    const newState = reducer(initialState, clearError());
    expect(newState.error).toEqual(null);
  });
});
