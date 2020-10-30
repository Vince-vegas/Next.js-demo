import React from 'react';
import PostCard from '../../Components/PostCard';

const Posts = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map(({ id, ...otherProps }) => {
          return <PostCard key={id} id={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Posts;
