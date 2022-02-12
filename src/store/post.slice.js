import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../services";

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {dispatch}) => {
        try {
            const posts = await postService.getAll();
            dispatch(getPosts(posts))
        } catch (e) {
            console.log(e)
        }
    }
);

const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name:'postsSlice',
    initialState,
    reducers:{
        getPosts:(state, action) =>{
            state.posts = [...action.payload]
        }
    }
});

const postsReducer = postsSlice.reducer;

export const {getPosts} = postsSlice.actions;
export default postsReducer;