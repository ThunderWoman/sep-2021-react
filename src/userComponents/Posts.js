import React from 'react';

const Posts = ({item}) => {
    return (
        <div>
            <h3>Post : {item.id}</h3>
            <h4>{item.title}</h4>
            <p>{item.body}</p>

        </div>
    );
};

export default Posts;