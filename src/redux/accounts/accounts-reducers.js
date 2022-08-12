import { createReducer } from '@reduxjs/toolkit';
import { stateAccounts } from './accounts-operations';

const initialState = [
  { id: 1, title: 'Счет 1', active: true },
  { id: 2, title: 'Счет 2', active: false },
  { id: 3, title: 'Счет 3', active: false },
  { id: 4, title: 'Счет 4', active: false },
];

export const accountsReducer = createReducer(initialState, {
  [stateAccounts]: (state, { payload }) =>
    (state = [...state].filter(el => el.id !== payload)),
});
