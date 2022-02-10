import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        users: userReducer,
    }
});

export default store;