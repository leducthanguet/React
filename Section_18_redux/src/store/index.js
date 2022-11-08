// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer, 
    auth: authSlice.reducer },
});

export default store;

// const counterReducer = (state = initialState, action) => {
//     if(action.type === "increment" && state.showCounter === true){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === "increase" && state.showCounter === true){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === "decrement" && state.showCounter === true){
//         if(state.counter===0){
//             return {
//                 counter: state.counter,
//                 showCounter: state.showCounter,
//             }
//         }
//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === "toggle"){
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer);
