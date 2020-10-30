import Image from 'next/image';
import React from 'react';

const PhotoCard = ({ thumbnailUrl, title, id }) => {
  return (
    <div className="card">
      <h5>{id}</h5>
      <div>
        <Image src={thumbnailUrl} width={150} height={150}></Image>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default PhotoCard;
