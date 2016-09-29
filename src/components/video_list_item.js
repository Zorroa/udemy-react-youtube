import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="medial-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

VideoListItem.propTypes = {
  video: React.PropTypes.object.isRequired,
  onVideoSelect: React.PropTypes.func.isRequired
}

export default VideoListItem
