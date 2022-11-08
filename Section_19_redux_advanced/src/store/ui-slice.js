import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    cartIsVisible: false,
    notification: null,
    showProducts: true,
}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
        setShowProducts(state) {
            state.showProducts = !state.showProducts;
        }
    }
})


export const uiActions = uiSlice.actions;
export default uiSlice;
