import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../services";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {dispatch}) => {
        try {
            const comments = await commentService.getAll();
            dispatch(getComments(comments));
        } catch (e) {
        }
    });

const initialState = {
    comments: []
}

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        getComments: (state, action) => {
            state.comments = [...action.payload]
        }
    }
});

const commentsReducer = commentsSlice.reducer;

export const {getComments} = commentsSlice.actions;

export default commentsReducer;