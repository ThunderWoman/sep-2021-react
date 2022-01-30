import React from 'react';

const User = ({user}) => {
    return (
        <div>
            {user.name} {user.username} {user.email}
        </div>
    );
};

export default User;