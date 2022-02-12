import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../services";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {dispatch}) => {
        const comments = await commentService.getAll();
        dispatch(setComments(comments));
    });

const initialState = {
    comments: []
}

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = [...action.payload]
        }
    }
});

const commentsReducer = commentsSlice.reducer;

export const {setComments} = commentsSlice.actions;

export default commentsReducer;