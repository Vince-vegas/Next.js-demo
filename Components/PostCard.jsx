import React from 'react';

const PostCard = ({ id, name, email, body }) => {
  return (
    <div className="card">
      <h5>{id}</h5>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
