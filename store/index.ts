import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import {store as reducer} from './reducers'
import storage from 'redux-persist/lib/storage'

export let store:any;
const PERSISTED_KEYS: string[] = ["userReducer"]
import {lmsApi} from "@services/api"

const persistConfig: any = {
  key: 'root-lms@0.0.0.1',
  whitelist: PERSISTED_KEYS,
  storage,
  // stateReconciler: false,
}


const persistedReducer = persistReducer(persistConfig, reducer)

function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        immutableCheck: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(lmsApi.middleware),
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  })
}

export const getOrCreateStore = (preloadedState = undefined) => {

  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...(store && store.getState()),
      ...preloadedState as object,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) store = _store

  return _store
}

store = getOrCreateStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store

export const persistor = persistStore(store)