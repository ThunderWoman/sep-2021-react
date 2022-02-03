import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from "./UsersPage.module.css";

import {userService} from "../../services";
import {User} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, []);

    return (
        <div className={css.UserPage}>
            <div className={css.users}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};