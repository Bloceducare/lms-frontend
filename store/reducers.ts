import { lmsApi } from '../services/api'
import { combineReducers } from '@reduxjs/toolkit'
import userReducer from "@views/auth/state"

export const store = combineReducers({
  [lmsApi.reducerPath]: lmsApi.reducer,
  userReducer
    // reducer: {
    //   [lmsApi.reducerPath]: lmsApi.reducer,
    //   userReducer
    // },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(lmsApi.middleware),
  }
  )
