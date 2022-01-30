import './App.css';

import React, {useEffect, useState} from 'react';
import Users from './components/users/Users';
import Form from './components/form/Form';
import {userService} from './services/userService';

function App() {

    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => {
                setUsers(value);
                setFiltered((value));
            });
    }, []);

    const filterUsers = (data) => {
        let filtArr = [...users];
        if (data.name) {
            filtArr = filtArr.filter(value => value.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filtArr = filtArr.filter(value => value.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filtArr = filtArr.filter(value => value.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFiltered(filtArr);
    };

    return (
        <div>
            <Form filterUsers={filterUsers}/>
            <Users users={filtered}/>
        </div>
    );
}


export default App;