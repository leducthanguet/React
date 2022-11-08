import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true,
  };
  
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      increment(state) {
          if(state.showCounter){
              state.counter++;
          }
      },
      decrement(state) {
          if(state.showCounter && state.counter > 0){
              state.counter--;
          }
      },
      increase(state, action) {
          if(state.showCounter){
              state.counter = state.counter + action.payload;
          }
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
