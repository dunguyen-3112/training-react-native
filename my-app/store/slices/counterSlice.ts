import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      if (state.value > 4) {
        state.value = 0;
        return;
      }
      state.value++;
    },
    decrement: (state: CounterState) => {
      if (state.value < -4) {
        state.value = 0;
        return;
      }
      state.value--;
    },
    reset: (state: CounterState) => {
      state.value = 0;
    },
  },
});

export const { increment, reset, decrement } = counterSlice.actions;

export default counterSlice.reducer;

export const selectCounter = (state: RootState) => state.counter.value;
