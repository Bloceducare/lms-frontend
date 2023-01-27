import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'config/endpoint';
import { AppState } from 'store';
import { ILoginResponse } from 'types';



export const lmsApi = createApi({
  reducerPath: 'lmsApi',
baseQuery: fetchBaseQuery({
     baseUrl,
     prepareHeaders(headers, {getState}) {
      const store = (getState() as AppState )
      const token = store?.userReducer?.user?.token
      headers.set('Authorization', `Bearer ${token}`)    
      return headers
     },
   }),
   tagTypes: ['Tasks', 'Groups', 'Users', "Resources", "Recordings",],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) =>{
        return{
          url: "/admin/create-user",
          method: 'POST',
          body,
        }
      }, 
      invalidatesTags:['Users']
    }),
    createGroup: builder.mutation({
      query: (body) =>{
        return{
          url: "/mentor/create-group",
          method: 'POST',
          body,
        }       
      }, 
      invalidatesTags: ['Groups'],
    }),

    loginUser: builder.mutation<ILoginResponse, null>({
      query: (body) =>{
        return{
          url: "login",
          method: 'POST',
          body,          
          headers: {
            "Content-Type": "application/json",       
           },
           transformResponse: async (response) =>{
            const res = await response.text()          
            return {
              data:JSON.parse(res)
            }
           } 
        }
      }, 
      
    }),
    logoutUser: builder.mutation<any, void>({
      query: () =>{
        return{
          url: "logout",
          method: 'POST',               
          headers: {
            "Content-Type": "application/json",       
           },          
        }
      }, 
      
    }),
    
    getCohorts: builder.query({
      query: () => `/shared/cohorts`,
    }),
    getGroups: builder.query({
      query: () => `/mentor/student-groups`,
      providesTags: ['Groups'],
    }),
    getUsers: builder.query({
      query: () => `/shared/users`,
      providesTags:['Users']
    }),
    getTracks: builder.query<any, void>({
      query: () => `/shared/tracks`,
    }),
    getCurriculum: builder.query({
      query: () => `/student/curriculum`,
    }),
    getTopics:builder.query({
      query: () => `/student/curriculum`,
    }),
    getModules:builder.query({
      query: () => `/shared/modules`,
    }),
    createTopics:builder.mutation({
      query: (body) =>{
        return{
          url: "/mentor/create-task",
          method: 'POST',
          body,
        }
      }, 
    }),
    createModule:builder.mutation({
      query: (body) =>{
        return{
          url: "/mentor/create-module",
          method: 'POST',
          body,
        }
      }, 
    }),
    getTasks:builder.query({
      query: () => `/shared/tasks`,
      providesTags: ['Tasks'],
    }),
    createTask:builder.mutation({
      query: (body) =>{
        return{
          url: "/mentor/create-module",
          method: 'POST',
          body,
        }
      }, 
      invalidatesTags: ['Tasks'],
    }),
    getResources:builder.query({
      query: () => `/student/resources`,
      providesTags: ['Resources'],
    }),
    createResource:builder.mutation({
      query: (body) =>{
        return{
          url: "/mentor/create-module",
          method: 'POST',
          body,
        }
      }, 
      invalidatesTags: ['Resources'],
    }),
    getRecordings:builder.query({
      query: () => `/student/recordings`,
      providesTags: ['Recordings'],
    }),
    createRecording:builder.mutation({
      query: (body) =>{
        return{
          url: "/mentor/upload-recording",
          method: 'POST',
          body,
        }
      }, 
      invalidatesTags: ['Recordings'],
    }),
  }),
});

export const {  
  useGetCohortsQuery, 
  useLoginUserMutation,  
  useLogoutUserMutation,
  useGetTracksQuery, 
  useGetUsersQuery, 
  useCreateUserMutation, 
  useCreateGroupMutation, 
  useGetGroupsQuery, 
  useGetCurriculumQuery,
  useGetModulesQuery,
  useCreateModuleMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useGetResourcesQuery,
  useCreateResourceMutation,
  useGetRecordingsQuery,
  useCreateRecordingMutation,
} =  lmsApi;