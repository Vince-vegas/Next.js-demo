import React from 'react';
import Card from '../../Components/Card';

const Client = (props) => {
  const { name, username, email, address } = props.client;
  return (
    <div>
      <Card name={name} username={username} email={email} address={address} />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          customer: '1',
        },
      },
      {
        params: {
          customer: '2',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ctx.params.customer}`
  );
  const data = await res.json();
  console.log(ctx);
  return {
    props: {
      client: data,
    },
  };
}

export default Client;
