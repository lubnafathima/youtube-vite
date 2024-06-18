import React from "react";
import Layout from "../../components/Layout/Layout";
import VideoPreviewComponent from "../../components/VideoPreview/VideoPreview";

const VideoPreview = () => {
  return (
    <Layout className="videopreview">
      <VideoPreviewComponent />
    </Layout>
  );
};

export default VideoPreview;
