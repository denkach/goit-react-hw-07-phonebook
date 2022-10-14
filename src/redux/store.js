import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { contactsApi } from './contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    filter: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), contactsApi.middleware];
  },
});

setupListeners(store.dispatch);
