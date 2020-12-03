import Card from '../../Components/Card';

const clients = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.clients.map(({ id, ...otherprops }) => {
          return <Card key={id} id={id} {...otherprops} />;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      clients: data,
    },
  };
}

export default clients;
