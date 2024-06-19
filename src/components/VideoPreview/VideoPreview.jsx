import "./VideoPreview.css"

const VideoPreview = () => {
  return (
    <div className="video_preview_container">
      <div className="video_preview"></div>
      <div className="video_suggestions">
        <div className="suggested_video"></div>
        <div className="suggested_video"></div>
        <div className="suggested_video"></div>
      </div>
    </div>
  );
};

export default VideoPreview;
