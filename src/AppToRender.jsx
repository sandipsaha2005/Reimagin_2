import React, { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import HorizontalParallax from './componets/HorizontalParallax'
import Hero from './organs/Hero'
import JustCheck from './componets/JustCheck'
import Sticky from './Comp/StickySection/StickySections'
import ScrollThreeD from './Comp/Scroll3Dgrid/Index'
import PreLoader from './Comp/preLoader/Index'
import VideoPlayer  from './Comp/preLoader/VideoPlayer'
import OpenVideo from './assets/video/PreLoadder.mp4'
import TrailDemo from './Comp/BasicTrail'
import {IconCloudDemo} from './Comp/circulCloud'
import { ScrollBasedVelocityDemo } from './Comp/textAnimation'
import { MarqueeDemo } from './Comp/Marquee/app'
// import ScrollThreeD './Comp/'
function AppToRender() {
  const [count, setCount] = useState(0)
  const [isPreLoading, setIsPreLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [open, set] = useState(true);


  return (
    <>
      <Sticky/>
      <MarqueeDemo/>
      <ScrollBasedVelocityDemo/>
      <ScrollThreeD/>
      {/* <TrailDemo/> */}
      {/* <IconCloudDemo/> */}
    </>
  )
}

export default AppToRender
