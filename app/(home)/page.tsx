export const metadata = {
  title: "Home",
  description: "Home",
};

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
      <h1>{JSON.stringify(movies)}</h1>
    </div>
  );
}
