/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {email, name, id , phone}= friend
    return (
        <div className='friend'> 
            <h2>{name}</h2>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
            <p><Link to= {`/friend/${id}`}>Show me </Link></p>

        </div>
    );
};

export default Friend;