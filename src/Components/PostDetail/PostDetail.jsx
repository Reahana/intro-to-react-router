/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post =useLoaderData()
    return (
      
           <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
              {post.body}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">author:{post.userId}</small>
        </Card.Footer>
          </Card>
        
    );
};

export default PostDetail;