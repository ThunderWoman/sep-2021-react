import React from "react";

const Comment = ({comment}) => {
    // const {id, postId, name} = comment;
    //
    // return (
    //     <div>
    //         <h3>Post {postId}, comment {id}</h3>
    //         <p>{name}</p>
    //     </div>
    const {id, name, email, body} = comment;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export {Comment};