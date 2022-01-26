import React, {useState} from 'react';

import {userService} from "../Services/userService";
import UserDetails from "./UserDetails";
import Posts from "../userComponents/Posts";

const User = ({item}) => {
    const [user,setUser] = useState(null);


    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value));

    }
    const [posts, setPosts] = useState([]);

    const getPosts = (id) => {
        userService.getId(id)
            .then(value => setPosts(value));
        console.log(id)
    };


    return (
        <div className='userWrap'>
            <div className='userInfo'>
                <div className='user'>
                    <h4> {item.id} {item.name}
                        <button onClick={() => getUserId(item.id)}>open Data User</button>
                    </h4>
                </div>
                <div className='userDetails'>
                    {user && <UserDetails details={user} getPosts={getPosts}/>}

                </div>
            </div>
            <div className='posts'>{posts.map(value => <Posts key={value.id} item={value}/>)} </div>
        </div>
    );
};

export default User;