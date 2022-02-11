import React from "react";

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div>
            <h3>{id}.Name is {name}</h3>
            <h4>Username is {username}</h4>
        </div>
    );
};

export {User};