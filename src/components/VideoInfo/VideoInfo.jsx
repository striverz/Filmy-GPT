import React from 'react'
import "./VideoInfo.css"

const VideoInfo = ({title,overview}) => {
  return (
    <div className="video-info">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <button>Play</button>
        <button>MoreInfo</button>
      </div>
    </div>
  )
}

export default VideoInfo