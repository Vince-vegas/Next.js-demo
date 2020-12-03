import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <ul>
          <li>
            <Link href="/clients">
              <a>Clients</a>
            </Link>
          </li>
          <li>
            <Link href="/photos">
              <a>Photos</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
