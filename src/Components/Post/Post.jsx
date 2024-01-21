/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Post = ({post}) => {
     const {id, title, body}= post;
    return (
        <div>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default Post;