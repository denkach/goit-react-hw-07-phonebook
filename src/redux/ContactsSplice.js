import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], filter: "" },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },

    deleteContact(state, action) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },

    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
