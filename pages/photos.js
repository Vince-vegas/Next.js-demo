import React from 'react';
import Card from '../Components/Card';

const Photos = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.photos.map((item) => {
          return (
            <Card
              key={item.id}
              thumbnailUrl={item.thumbnailUrl}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  return {
    props: {
      photos: data,
    },
  };
}

export default Photos;
