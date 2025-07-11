"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/movie.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function Movie({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie.id}`} className={styles.movieCard}>
      <Image
        src={movie.poster_path}
        alt={movie.title}
        width={200}
        height={240}
        className={styles.movieImage}
      />
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
      </div>
    </Link>
  );
}
