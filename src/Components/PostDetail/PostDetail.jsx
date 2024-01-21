/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post =useLoaderData()
    return (
        <div>
          <h2>{post.title}</h2>
            <h3>{post. body}</h3>
        </div>
    );
};

export default PostDetail;