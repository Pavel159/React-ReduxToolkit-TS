import React from 'react';
import { IPost } from '../../models/IPost';
import cl from './Post.module.css';

const Post: React.FC<IPost> = ({ id, title, body }) => {
  return (
    <div className={cl.post}>
      <h3>Title: {title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
