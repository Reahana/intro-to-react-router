/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const navigate = useNavigate()
    const handleGoBack =() =>{
navigate(-1);
    }
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h2>Name: {friend.name}</h2>
            <h3>Phone: {friend.phone}</h3>
            <Button className='bg-dark' onClick={handleGoBack}>Go back</Button>
        </div>
    );
};

export default FriendDetail;