import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";
import postsReducer from "./post.slice";
import commentsReducer from "./comment.slice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        users: userReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
});

export default store;