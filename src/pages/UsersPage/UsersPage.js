import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {User} from "../../components";

const UsersPage = () => {
    const {users} = useSelector(store => store['usersReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};