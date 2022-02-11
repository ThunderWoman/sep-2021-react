import React from "react";
import {Routes, Route} from "react-router-dom";

import './App.css'

import {Header} from "./components";
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;