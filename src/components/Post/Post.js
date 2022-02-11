import React from "react";

const Post = ({post}) => {
    const {id, userId, title} = post;

    return (
        <div>
            <h3>User {userId}</h3>
            <h4>Post {id}:</h4>
            <p>{title}</p>
        </div>
    );
};

export {Post};