// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import Video from '../../assets/video/PreLoadder.mp4'
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const PreLoader = ({ onFinished }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => setStep(step + 1), 1000); // Show each text for 1 second
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleVideoEnd = () => {
    console.log("Video ended");
    onFinished();
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-800 text-white">
      {step === 0 && <h1 className="text-4xl mb-4">First Text</h1>}
      {step === 1 && <h1 className="text-4xl mb-4">Second Text</h1>}
      {step === 2 && <h1 className="text-4xl mb-4">Third Text</h1>}
      {step === 3 && (
        <ReactPlayer
          url={Video}
          playing
          onEnded={handleVideoEnd}
          className="w-full max-w-3xl"
        />
      )}
    </div>
  );
};

export default PreLoader;
