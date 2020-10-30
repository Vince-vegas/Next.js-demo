import Link from 'next/link';
import PhotoCard from '../Components/PhotoCard';

export default function Home() {
  return (
    <div>
      <h1>Page</h1>
      <Link href="/posts">
        <a>To Posts</a>
      </Link>
      <div>
        <Link href="/photos">
          <a>To Images</a>
        </Link>
      </div>
    </div>
  );
}
