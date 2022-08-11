import { createReducer } from '@reduxjs/toolkit';
import { stateModal } from './modal-operation';

const initialState = { isOpenModal: false };

export const modalReducer = createReducer(initialState, {
  [stateModal]: (state, { payload }) => {
    state.isOpenModal = payload;
  },
});
