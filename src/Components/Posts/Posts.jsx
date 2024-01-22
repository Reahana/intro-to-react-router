/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Posts = () => {
 const posts = useLoaderData();
    return (
        <div>
            <h1>all posts are here {posts.length}</h1>
            
                <Row>
                    <Col>
                    {
                    posts.map(post => <Post
                    key= {post.id}
                    post = {post}
                    ></Post>)
                }
                    </Col>
                </Row>
                
            
        </div>
    );
};

export default Posts;