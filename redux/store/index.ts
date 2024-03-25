// store/index.ts
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';

export const store = configureStore({
  reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;


// // store/index.ts
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../rootReducer';

// export const store = configureStore({
//   reducer: rootReducer,
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
