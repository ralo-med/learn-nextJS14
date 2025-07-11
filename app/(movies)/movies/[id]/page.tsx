import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }
  const json = await response.json();
  return json;
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  const json = await response.json();
  return json;
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      MovieDetailPage {movie.title} {movie.rating} {movie.description}
    </div>
  );
}
