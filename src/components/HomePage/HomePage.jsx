import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='homepage_container'>
      <div className='filter_group'>
        <button className='filter_btn'></button>
        <button className='filter_btn'></button>
        <button className='filter_btn'></button>
      </div>
      <div className='video_group'>
        <Link to="/video-preview" className='video_container'></Link>
        <Link to="/video-preview" className='video_container'></Link>
        <Link to="/video-preview" className='video_container'></Link>
        <Link to="/video-preview" className='video_container'></Link>
        <Link to="/video-preview" className='video_container'></Link>
        <Link to="/video-preview" className='video_container'></Link>
      </div>
    </div>
  )
}

export default HomePage
