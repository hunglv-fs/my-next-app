import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counters: { cat: 0, dog: 0, goat: 0 } },
  reducers: {
    increment: (state, action) => { state.counters[action.payload] += 1; },
    decrement: (state, action) => { state.counters[action.payload] -= 1; },
    reset: (state, action) => { state.counters[action.payload] = 0; }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;