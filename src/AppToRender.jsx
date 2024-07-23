import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
// import HorizontalParallax from './componets/HorizontalParallax'
// import Hero from './organs/Hero'
// import JustCheck from './componets/JustCheck'
import Sticky from "./Comp/StickySection/StickySections";
import ScrollThreeD from "./Comp/Scroll3Dgrid/Index";
import PreLoader from "./Comp/preLoader/Index";
import VideoPlayer from "./Comp/preLoader/VideoPlayer";
import OpenVideo from "./assets/video/PreLoadder.mp4";
// import TrailDemo from './Comp/BasicTrail'
import NavbarDemo from "./organs/Navbar";
import { IconCloudDemo } from "./Comp/circulCloud";
import { ScrollBasedVelocityDemo } from "./Comp/textAnimation";
import { MarqueeDemo } from "./Comp/Marquee/app";
import Footer from "./organs/Footer";
import { HeroParallaxDemo } from "./Comp/HeroParallex/App";
// import { GlobeDemo } from './Comp/Earth/Ui'
import MenuMain1 from "./Comp/menuGridImg/app";
import MenuMain from "./Comp/menuGrid/app";
import { TracingBeamDemo } from "./Comp/TraceBeam/App";
import Nav from "./Comp/NavBar/app";
import { PlaceholdersAndVanishInputDemo } from './Comp/textField'

// import { ThreeDCardDemo } from './Comp/threeDCard/index'
// import ScrollThreeD './Comp/'
function AppToRender() {
  // const [count, setCount] = useState(0)
  // const [isPreLoading, setIsPreLoading] = useState(true);
  // const [seconds, setSeconds] = useState(0);
  // const [open, set] = useState(true);

  return (
    <>
      <NavbarDemo />

       <HeroParallaxDemo />
       <ScrollBasedVelocityDemo />
       <MenuMain1 />

       <TracingBeamDemo />
  
       <ScrollThreeD />
       <MarqueeDemo />
       <MenuMain /> 
      <PlaceholdersAndVanishInputDemo/>
       <Footer />  
    </>
  );
}

export default AppToRender;
