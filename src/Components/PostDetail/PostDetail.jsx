/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post =useLoaderData()
    return (
        <div>
          <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h4>author:{post.userId}</h4>
        </div>
    );
};

export default PostDetail;