import { useSelector, useDispatch } from 'react-redux';
import { onIncrement } from '../store/reducer';
import Link from 'next/link';

export default function Home() {
  const number = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <Link href="/photos">
        <a>to Photos</a>
      </Link>
      <h1>Homepage</h1>
      <h1>Number: {number}</h1>
      <button onClick={() => dispatch(onIncrement())}>Increment</button>
    </div>
  );
}
