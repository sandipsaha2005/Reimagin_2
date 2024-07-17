// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import Video from '../../assets/video/PreLoadder.mp4'
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import VideoPlayer from './VideoPlayer'
import OpenVideo from '../../assets/video/PreLoadder.mp4'
// import VideoJS from './VideoPlayer'
import exampleGif from '../../assets/gif/d9oji4g-e98045e6-424f-40e6-bee0-42149b0ef1c0.gif'
import OpeningSequence from '../TextOpen/OpeningSequence'
const PreLoader = ({ onFinished }) => {
  const [step, setStep] = useState(0);

const durations = [15000,5000]
useEffect(() => {
    if (step < durations.length) {
      const timer = setTimeout(() => setStep(step + 1), durations[step]);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleVideoEnd = () => {
    console.log("Video ended");
    onFinished();
  };



  return (
    <div className="flex justify-center items-center h-screen flex-col bg-transparent text-white">
      {step === 0 && <OpeningSequence/>}
      {step === 1 && (
       <VideoPlayer/>
      )}
    </div>
  );
};

export default PreLoader;
