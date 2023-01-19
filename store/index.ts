import { configureStore } from '@reduxjs/toolkit';
import { lmsApi } from '../services/api'

export const store = configureStore({

    reducer: {
      [lmsApi.reducerPath]: lmsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(lmsApi.middleware),
  }
  )