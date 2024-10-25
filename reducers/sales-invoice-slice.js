import {createSlice} from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

const initialState = {
    number: isBrowser ? JSON.parse(window.localStorage.getItem("tabs-counter")) ?? 0 : 0,
    items: isBrowser ? JSON.parse(window.localStorage.getItem("tabs-items")) ?? [] : [],
};

export const salesInvoiceSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            if (isBrowser) {
                window.localStorage.removeItem("tabs-counter");
                state.number += 1;
                window.localStorage.setItem("tabs-counter", JSON.stringify(state.number));
            }
        },
        decrement: (state) => {
            if (isBrowser) {
                window.localStorage.removeItem("tabs-counter");
                state.number > 1 ? (state.number -= 1) : state.number;
                window.localStorage.setItem("tabs-counter", JSON.stringify(state.number));
            }
        },
        addReceiptItem: (state, action) => {
            if (isBrowser) {
                window.localStorage.removeItem("tabs-items");
                state.items.push(action.payload);
                window.localStorage.setItem("tabs-items", JSON.stringify(state.items));
            }
        },
        removeReceiptItem: (state, action) => {
            if (isBrowser) {
                window.localStorage.removeItem("tabs-items");
                const index = state.items.findIndex(item => item.id === action.payload);
                if (index !== -1) state.items.splice(index, 1);
                window.localStorage.setItem("tabs-items", JSON.stringify(state.items));
            }
        }
    }
});

export const {increment, decrement, addReceiptItem, removeReceiptItem} = salesInvoiceSlice.actions;

export default salesInvoiceSlice.reducer;
