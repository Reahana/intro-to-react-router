/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
     const {id, title, body}= post;
    return (
            <Card>
            <p><Link to= {`/post/${id}`}>{title} </Link></p>
            </Card>
           
    );
};

export default Post;