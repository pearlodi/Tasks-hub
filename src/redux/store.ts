import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
// import chatReducer  from './slices/chatSlice';
const store = configureStore({
  reducer: {
    data: dataReducer,
    // chat: chatReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
