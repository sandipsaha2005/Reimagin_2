import React, { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import HorizontalParallax from './componets/HorizontalParallax'
import Hero from './organs/Hero'
import JustCheck from './componets/JustCheck'
// import Sticky from './Comp/StickySections'
import ScrollThreeD from './Comp/Scroll3Dgrid/Index'
import PreLoader from './Comp/preLoader/Index'
import AppToRender from './AppToRender'
// import ScrollThreeD './Comp/'
// import Main from './Comp/menuGrid'
import { ExpandableCardDemo } from './Comp/menuGrid'
// import useAnimation from './Hooks/useAnimation'

function App() {
  const [count, setCount] = useState(0)
  const [isPreLoading, setIsPreLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds < 21) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      if(seconds==20){
        setIsPreLoading(false)
      }
      return () => clearInterval(interval);
    }
  }, [seconds]);
  // useAnimation();
// console.log(seconds);

  return (
    <>
      {/* {isPreLoading ? <PreLoader /> : <AppToRender/>}     */}
      {/* <AppToRender/> */}
      <ExpandableCardDemo/>
      <ExpandableCardDemo/>
      <ExpandableCardDemo/>
      <ExpandableCardDemo/>
      <ExpandableCardDemo/>
      

    </>
  )
}

export default App
