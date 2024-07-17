import React from 'react';
import OpenVideo from '../../assets/video/PreLoadder.mp4'
const VideoPlayer = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <video 
        style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
        src={OpenVideo}
        autoPlay 
        loop 
        muted 
        playsInline 
      />
    </div>
  );
}

export default VideoPlayer;