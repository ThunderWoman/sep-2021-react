import React from "react";

const Comment = ({comment}) => {
    const {id, postId, name} = comment;

    return (
        <div>
            <h3>Post {postId}, comment {id}</h3>
            <p>{name}</p>
        </div>
    );
};

export {Comment};