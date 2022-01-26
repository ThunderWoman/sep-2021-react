import React, {useEffect, useState} from 'react';

import {userService} from "../Services/userService";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    },[]);



    return (
        <div className='wrap'>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
};

export default Users;