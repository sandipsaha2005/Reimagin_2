import React, { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HorizontalParallax from './componets/HorizontalParallax'
import Hero from './organs/Hero'
import JustCheck from './componets/JustCheck'
import Sticky from './Comp/StickySections'
import ScrollThreeD from './Comp/Scroll3Dgrid/Index'
import PreLoader from './Comp/preLoader/Index'
// import ScrollThreeD './Comp/'
function App() {
  const [count, setCount] = useState(0)
  const [isPreLoading, setIsPreLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds < 16) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      if(seconds==14){
        setIsPreLoading(false)
      }
      return () => clearInterval(interval);
    }
  }, [seconds]);
console.log(seconds);

  return (
    <>
      {isPreLoading ? <PreLoader /> : <Sticky/>}
        
      
    
    </>
  )
}

export default App
