import "./HomePageComponent.css";
import VideoContainer from "../VideoContainer/VideoContainer";

const HomePage = () => {
  return (
    <div className="homepage_container">
      <div className="filter_group">
        <button className="filter_btn"></button>
        <button className="filter_btn"></button>
        <button className="filter_btn"></button>
      </div>
      <div className="video_group">
        <VideoContainer />
        <VideoContainer />
        <VideoContainer />
        <VideoContainer />
        <VideoContainer />
      </div>
    </div>
  );
};

export default HomePage;
