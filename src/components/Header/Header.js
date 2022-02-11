import React from "react";
import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <NavLink to={'cars'}>Cars</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {Header};