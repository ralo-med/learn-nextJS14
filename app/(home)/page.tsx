import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <div>
        <h2>Movies</h2>
        <ul>
          <li>
            <Link href="/movies/1">Movie 1</Link>
          </li>
          <li>
            <Link href="/movies/2">Movie 2</Link>
          </li>
          <li>
            <Link href="/movies/3">Movie 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
