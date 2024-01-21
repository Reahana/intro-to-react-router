/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
     const {id, title, body}= post;
    return (
        <div>
            <h2>{title}</h2>
            <p><Link to= {`/post/${id}`}>Read... </Link></p>

        </div>
    );
};

export default Post;