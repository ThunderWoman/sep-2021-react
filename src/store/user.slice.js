import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: []
    },
    reducers: {
        deleteUser: (state, action) => {
            state.users.filter(user => user !== action.payload.user)
        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer;
export const {deleteUser} = userSlice.actions;