import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../services";

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {dispatch}) => {
        try {
            const users = await userService.getAll();
            dispatch(getUsers(users));
        } catch (e) {
        }
    });

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = [...action.payload];
        }
    }
});

const userReducer = userSlice.reducer;

export const {getUsers} = userSlice.actions;
export default userReducer;