import React from 'react';

const UserDetailPage = async ({params}) => {

    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user1 = await res.json();

    return (
        <div>
            <h2>User Detail Page</h2>
            <p>{user1.name}</p>
            <p>{user1.email}</p>
            <p>{user1.phone}</p>
            <p>{user1.website}</p>
        </div>
    );
};

export default UserDetailPage;