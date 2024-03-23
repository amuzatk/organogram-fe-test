// // redux/store.ts
// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import tokenReducer from './slices/tokenSlice';
// import questionReducer from './slices/questionSlice';

// export const store = configureStore({
//   reducer: {
//     token: tokenReducer,
//     questions: questionReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;


// redux/store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


// // redux/store.ts

// import { configureStore, ThunkAction } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
// import { Action } from 'redux';

// export const store = configureStore({
//   reducer: rootReducer,
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

