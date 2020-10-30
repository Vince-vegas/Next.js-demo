import React from 'react';
import PhotoCard from '../../Components/PhotoCard';

const Photos = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map(({ id, ...otherProps }) => {
          return <PhotoCard key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Photos;
