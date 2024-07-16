import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HorizontalParallax from './componets/HorizontalParallax'
import Hero from './organs/Hero'
import JustCheck from './componets/JustCheck'
import Sticky from './Comp/StickySections'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hero/> */}
      {/* <JustCheck/> */}
      <Sticky/>
    </>
  )
}

export default App
