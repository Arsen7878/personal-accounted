import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';

import { modalReducer } from './modal/modal-reducer';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const reducer = combineReducers({
  modal: modalReducer,
});

// прослойки, которые проходит action перед тем как попасть в reducer
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// const a = {
//   auth: { user: { name: null, token: null } },
//   accounts: [],
//   transactions: [],
// };

// export const persister = persistStore(store);
