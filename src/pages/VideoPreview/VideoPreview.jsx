import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import VideoPreviewComponent from "../../components/VideoPreview/VideoPreview";

const VideoPreview = () => {
  return (
    <>
      <Header />
      <SideBar />
      <VideoPreviewComponent />
    </>
  );
};

export default VideoPreview;
