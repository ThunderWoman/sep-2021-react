import React from 'react';


const UserDetails = ({details , getPosts}) => {



    return (
        <div>
            <h4>{details.name}</h4>
            <h4>{details.username}</h4>
            <h4>{details.username}</h4>
            <h4>{details.email}</h4>
            <h4>{details.website}</h4>
            <h4>{details.phone}</h4>
            <button onClick={()=>getPosts(details.id)} >click me</button>

        </div>
    );
};

export default UserDetails;