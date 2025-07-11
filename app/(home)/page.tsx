import Link from "next/link";
import Image from "next/image";
import Movie from "../../components/movie";
import styles from "../styles/home.module.css";
import { API_URL } from "../lib/constants";

export const metadata = {
  title: "Home",
  description: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>인기 영화</h1>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
