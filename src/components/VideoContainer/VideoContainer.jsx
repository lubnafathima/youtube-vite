import { Link } from "react-router-dom";
import React from "react";
import './VideoContainer.css'

const VideoContainer = () => {
  return (
    <Link to="/video-preview" className="video_container">
        <div className="video_thumbnail"></div>
        <div className="video_about">
          <div className="user_profile"></div>
          <div className="video_desc">
            <div className="video_title"></div>
            <div className="video_info"></div>
          </div>
        </div>
    </Link>
  );
};

export default VideoContainer;
