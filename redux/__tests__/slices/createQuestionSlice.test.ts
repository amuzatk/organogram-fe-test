// // Import necessary modules and types
// import configureStore from 'redux-mock-store';
// import thunk, { ThunkMiddleware } from 'redux-thunk';
// import { AnyAction, Dispatch } from 'redux';
// import axios from 'axios';
// import { addQuestion } from '@/redux/slices/createQuestionSlice';

// // Define the root state type
// type RootState = {};

// // Define the type for the middleware
// type MyThunkMiddleware = ThunkMiddleware<RootState, AnyAction>;

// // Define the middleware array
// const middlewares = [thunk as unknown as MyThunkMiddleware]; // Use MyThunkMiddleware instead of MyMiddleware

// // Create a mock store
// const mockStore = configureStore<RootState, AnyAction>(middlewares);

// // Mock the axios module
// jest.mock('axios');

// // Write the test case
// describe('createQuestionSlice async actions', () => {
//   let store: any;

//   beforeEach(() => {
//     store = mockStore({});
//   });

//   it('should add a new question', async () => {
//     const questionData = { question: 'Test question', options: ['Option 1', 'Option 2'] };
//     (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({ data: 'newQuestionId' });

//     await store.dispatch(addQuestion(questionData));
//     const actions = store.getActions();

//     expect(actions[0].type).toEqual(addQuestion.pending.type);
//     expect(actions[1].type).toEqual(addQuestion.fulfilled.type);
//     expect(actions[1].payload).toEqual('newQuestionId');
//   });
// });
