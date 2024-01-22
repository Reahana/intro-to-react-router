/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Friend = ({friend}) => {
    const {email, name, id , phone}= friend;
    const navigate = useNavigate();
const handleNavigation = () =>{
    navigate(`/friend/${id}`)
}

    return (
        <div className='friend'> 
            <h2>{name}</h2>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
            <p><Link to= {`/friend/${id}`}>Show me </Link></p>
            <Button className='bg-danger' onClick={handleNavigation}>Details</Button>

        </div>
    );
};

export default Friend;