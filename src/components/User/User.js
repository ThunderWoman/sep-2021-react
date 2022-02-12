import React from "react";

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div>
            <h3>{id}.Name: {name}</h3>
            <h4>Username: {username}</h4>
        </div>
    );
};

export {User};