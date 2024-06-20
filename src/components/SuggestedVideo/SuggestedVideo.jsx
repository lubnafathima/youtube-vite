import React from 'react'
import './SuggestedVideo.css';

const SuggestedVideo = () => {
  return (
    <div className="suggestion_container">
      <div className="suggested_preview"></div>
      <div className="suggested_content">
        <p className="suggested_about"></p>
        <p className="suggested_info"></p>
        <p className="suggested_more"></p>
      </div>
    </div>
  )
}

export default SuggestedVideo
