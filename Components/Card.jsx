import React from 'react';
import Image from 'next/image';

const Card = ({ thumbnailUrl, title }) => {
  return (
    <div className="card">
      <div>
        <Image src={thumbnailUrl} height={150} width={150} alt={title} />
      </div>
      <h4>Title: {title}</h4>
    </div>
  );
};

export default Card;
