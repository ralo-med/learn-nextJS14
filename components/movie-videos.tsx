import { API_URL } from "../app/lib/constants";
import styles from "../app/styles/movie-videos.module.css";

interface Video {
  id: number;
  name: string;
  rating: number;
  key: string;
}

async function getVideos(id: string): Promise<Video[]> {
  const response = await fetch(`${API_URL}/${id}/videos`);
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  const json = await response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  if (videos.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>관련 비디오</h2>
        <div className={styles.empty}>관련 비디오가 없습니다.</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>관련 비디오</h2>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <iframe
              src={`https://www.youtube.com/embed/${video.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.name}
              className={styles.videoFrame}
            />
            <div className={styles.videoInfo}>
              <h3 className={styles.videoTitle}>{video.name}</h3>
              <p className={styles.videoType}>YouTube</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
