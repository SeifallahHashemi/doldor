import {createSlice} from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

export const token = createSlice({
    name: 'token',
    initialState: {
        token: isBrowser ? JSON.parse(window.localStorage.getItem('token')) : null,
        role: isBrowser ? JSON.parse(window.localStorage.getItem('roles')) : null,
        userId: isBrowser ? JSON.parse(window.localStorage.getItem('userId')) : null,
    },
    reducers: {
        getToken: (state, action) => {
            if (isBrowser) {
                window.localStorage.removeItem('token');
                state.token = action.payload;
                window.localStorage.setItem('token', JSON.stringify(action.payload));
            }
        },
        getRole: (state, action) => {
            if (isBrowser) {
                window.localStorage.removeItem('roles');
                state.role = action.payload;
                window.localStorage.setItem('roles', JSON.stringify(action.payload));
            }
        },
        getUserId: (state, action) => {
            if (isBrowser) {
                window.localStorage.removeItem('userId');
                state.userId = action.payload;
                window.localStorage.setItem('userId', JSON.stringify(action.payload));
            }
        }
    },
});

export const {getToken, getRole, getUserId} = token.actions;

export default token.reducer;