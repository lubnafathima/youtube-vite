import "./VideoPreviewComponent.css"
import SuggestedVideo from "../SuggestedVideo/SuggestedVideo";

const VideoPreview = () => {
  return (
    <div className="video_preview_container">
      <div className="video_preview"></div>
      <div className="video_suggestions">
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
      </div>
    </div>
  );
};

export default VideoPreview;
