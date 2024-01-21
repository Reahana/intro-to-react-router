/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h2>Name: {friend.name}</h2>
            <h3>Phone: {friend.phone}</h3>
        </div>
    );
};

export default FriendDetail;