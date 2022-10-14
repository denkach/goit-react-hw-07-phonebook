import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
