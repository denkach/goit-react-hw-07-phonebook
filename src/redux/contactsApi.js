import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63489f030b382d796c749925.mockapi.io/',
  }),
  tagTypes: 'contacts',
  endpoints: builder => ({
    getContactByName: builder.query({
      query: () => `contacts`,
      providesTags: ['contacts'],
    }),
    //
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    //
    addContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactByNameQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
