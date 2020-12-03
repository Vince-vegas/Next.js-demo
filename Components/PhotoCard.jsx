import React from 'react';
import Image from 'next/image';

const PhotoCard = ({ thumbnailUrl, title, id }) => {
  return (
    <div>
      <div>
        <Image src={thumbnailUrl} alt={title} height={150} width={150} />
      </div>
      <h5>Id: {id}</h5>
      <h4>Title: {title}</h4>
    </div>
  );
};

export default PhotoCard;
