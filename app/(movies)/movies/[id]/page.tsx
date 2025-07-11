import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";
import { Metadata } from "next";
import { API_URL } from "../../../lib/constants";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }
  return response.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const movie = await getMovie(id);

    return {
      title: `${movie.title} | Netflix Clone`,
      description: movie.overview || `${movie.title} 영화 정보를 확인해보세요.`,
      openGraph: {
        title: movie.title,
        description:
          movie.overview || `${movie.title} 영화 정보를 확인해보세요.`,
        images: [
          {
            url: movie.poster_path,
            width: 300,
            height: 450,
            alt: movie.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: movie.title,
        description:
          movie.overview || `${movie.title} 영화 정보를 확인해보세요.`,
        images: [movie.poster_path],
      },
    };
  } catch (error) {
    return {
      title: "영화 정보 | Netflix Clone",
      description: "영화 정보를 확인해보세요.",
    };
  }
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <MovieInfo id={id} />
        <Suspense fallback={<p>Loading...</p>}>
          <MovieVideos id={id} />
        </Suspense>
      </Suspense>
    </div>
  );
}
