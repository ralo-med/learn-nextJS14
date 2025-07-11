"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  interface Movie {
    id: number;
    title: string;
    rating: number;
  }
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Hello Next.js</h1>
      <div>
        <h2>Movies</h2>
        <ul>
          {loading ? (
            <p>Loading...</p>
          ) : (
            movies.map((movie) => (
              <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
