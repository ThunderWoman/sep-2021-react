import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";
import postsReducer from "./post.slice";
import commentsReducer from "./comment.slice";

const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        postsReducer,
        commentsReducer
    }
});

export default store;