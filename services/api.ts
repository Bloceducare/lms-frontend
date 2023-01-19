import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'config/endpoint';



export const lmsApi = createApi({
  reducerPath: 'lmsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) =>{
        return{
          url: "/admin/create-user",
          method: 'POST',
          body,
        }
      }, 
    }),
    loginUser: builder.mutation({
      query: (body) =>{
        return{
          url: "login",
          method: 'POST',
          body,
          headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json, text-plain, */*",
            // 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') 
            'X-CSRF-Token':"{{ csrf_token() }}"
        }
        }
      }, 
    }),
    getCharacterDetails: builder.query({
      query: (id) => `/character/${id}`,
    }),

  }),
});

export const {  useGetCharacterDetailsQuery, useLoginUserMutation } =  lmsApi;