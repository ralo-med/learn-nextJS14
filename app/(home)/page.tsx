import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovies();
  interface Movie {
    id: number;
    title: string;
    rating: number;
  }
  return (
    <div>
      <h1>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))}
      </h1>
    </div>
  );
}
