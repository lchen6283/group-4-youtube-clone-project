import { Link } from "react-router-dom";
import VideoThumbnail from "./VideoThumbnail";
import "./VideoList.css";

/**
 * Displays collection of searched videos
 * @param {Array} videos
 * @returns <div> containing video thumbnail and link
 */
const VideoList = ({ videos, passedFrom }) => {
  return (
    <div className="video-container">
      {videos.map((video) => {
        const { id, snippet, etag } = video;
        const { title } = snippet;
        if (passedFrom === "trending") {
          return (
            <Link className="links" key={etag} to={`./videos/${id}`}>
              <VideoThumbnail video={video} />
              <p className="title">{title}</p>
            </Link>
          );
        }
        return (
          <div key={etag}>
            <Link className="links" key={etag} to={`./videos/${id.videoId}`}>
              <VideoThumbnail video={video} />
              <p className="title">{title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
