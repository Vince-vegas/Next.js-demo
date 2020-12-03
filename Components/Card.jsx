import React from 'react';
import Link from 'next/link';

const Card = ({ name, username, email, address, id }) => {
  return (
    <div className="card">
      <h5>Name: {name}</h5>
      <h5>Username: {username}</h5>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.city} City
      </p>
      <p>ZipCode: {address.zipcode}</p>

      <div>
        <Link href={`/clients/${id}`}>
          <a>Visit</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
