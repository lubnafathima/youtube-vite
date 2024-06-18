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
        <div className='video_container'></div>
        <div className='video_container'></div>
        <div className='video_container'></div>
        <div className='video_container'></div>
        <div className='video_container'></div>
        <div className='video_container'></div>
      </div>
    </div>
  )
}

export default HomePage
