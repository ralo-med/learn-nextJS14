import { API_URL } from "../app/lib/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/movie-info.module.css";

interface Movie {
  id: number;
  title: string;
  rating: number;
  description: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

async function getMovie(id: string): Promise<Movie> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        ← 뒤로 가기
      </Link>

      <div className={styles.movieHeader}>
        <div className={styles.poster}>
          <Image
            src={movie.poster_path}
            alt={movie.title}
            width={300}
            height={450}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.rating}>
            ⭐️ {movie.vote_average.toFixed(2)}/10
          </p>
          <p className={styles.description}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
