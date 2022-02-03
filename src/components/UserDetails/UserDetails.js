import {Outlet} from "react-router-dom";

import {Button} from "../Button/Button";

const UserDetails = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <Button to={'posts'}>Posts</Button>
            <Outlet/>
        </div>
    );
};

export {UserDetails};