// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import Video from '../../assets/video/PreLoadder.mp4'
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import VideoPlayer from './VideoPlayer'
import OpenVideo from '../../assets/video/PreLoadder.mp4'
// import VideoJS from './VideoPlayer'
import exampleGif from '../../assets/gif/d9oji4g-e98045e6-424f-40e6-bee0-42149b0ef1c0.gif'
const PreLoader = ({ onFinished }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 4) {
      const timer = setTimeout(() => setStep(step + 1), 1000); // Show each text for 1 second
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleVideoEnd = () => {
    console.log("Video ended");
    onFinished();
  };



  return (
    <div className="flex justify-center items-center h-screen flex-col bg-transparent text-white">
      {step === 0 && <img 
        src={exampleGif} 
        alt="Example GIF" 
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />}
      {step === 1 && <h1 className="text-4xl mb-4">First Text</h1>}
      {step === 2 && <h1 className="text-4xl mb-4">Second Text</h1>}
      {step === 3 && <h1 className="text-4xl mb-4">Third Text</h1>}
      {step === 4 && (
       <VideoPlayer/>
      )}
    </div>
  );
};

export default PreLoader;
